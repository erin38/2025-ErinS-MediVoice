<script>
	import Box1 from '../components/box1.svelte';
	import Calendar from '../components/calendar.svelte';
	import { medications, getMedicationsForDay } from '$lib/medicationData.js';
	import { onMount } from 'svelte';

	// State for selected date (default to today)
	let selectedDate = $state(new Date());

	// Track completion status of each medication
	let medicationCompletionStatus = $state({});

	// Completed dates from localStorage
	let completedDates = $state([]);

	// Load completed dates from localStorage
	onMount(() => {
		const stored = localStorage.getItem('completedMedicationDates');
		if (stored) {
			completedDates = JSON.parse(stored);
		}
	});

	// Get day name from date
	function getDayName(date) {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[date.getDay()];
	}

	// Format date for display
	function formatDate(date) {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
	}

	// Format date as YYYY-MM-DD for storage
	function formatDateForStorage(date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	// Handler for date selection
	function handleDateSelect(newDate) {
		selectedDate = newDate;
		// Reset completion status when changing dates
		medicationCompletionStatus = {};
	}

	// Handle medication completion change
	function handleMedicationCompletion(medId, isComplete) {
		medicationCompletionStatus[medId] = isComplete;
	}

	// Get medications for selected day
	let dayName = $derived(getDayName(selectedDate));
	let todaysMedications = $derived(getMedicationsForDay(dayName));
	let sortedMedications = $derived(
		todaysMedications.sort((a, b) => {
			const timeA = a.times[0];
			const timeB = b.times[0];
			return timeA.localeCompare(timeB);
		})
	);

	// Check if all medications are completed
	let allMedicationsComplete = $derived(
		sortedMedications.length > 0 &&
			sortedMedications.every((med) => medicationCompletionStatus[med.id] === true)
	);

	// Watch for completion and update localStorage
	$effect(() => {
		if (allMedicationsComplete) {
			const dateStr = formatDateForStorage(selectedDate);
			if (!completedDates.includes(dateStr)) {
				completedDates = [...completedDates, dateStr];
				localStorage.setItem('completedMedicationDates', JSON.stringify(completedDates));
			}
		}
	});
</script>

<div class="container mx-auto my-3 flex w-screen flex-col items-center space-y-3 p-4">
	<h1 class="text-steelblue text-2xl font-bold">{formatDate(selectedDate)}</h1>

	<Calendar {selectedDate} {completedDates} onDateSelect={handleDateSelect} />

	{#if allMedicationsComplete}
		<div class="completion-celebration">
			🎉 Congratulations! All medications taken for today! 🎉
		</div>
	{/if}

	<div class="medications-section w-full max-w-md">
		<h2 class="text-steelblue mb-4 text-center text-xl font-semibold">
			Today's Medications ({sortedMedications.length})
		</h2>

		{#if sortedMedications.length === 0}
			<div class="empty-state">🎉 No medications scheduled for this day</div>
		{:else}
			<div class="medications-list">
				{#each sortedMedications as medication (medication.id)}
					<Box1 {medication} onCompletionChange={handleMedicationCompletion} />
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.completion-celebration {
		width: 100%;
		max-width: 420px;
		margin: 10px 0;
		padding: 25px 20px;
		text-align: center;
		font-size: 20px;
		font-weight: 700;
		animation: celebratePulse 2s ease-in-out infinite;
	}

	@keyframes celebratePulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.medications-section {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		max-width: 420px;
	}

	.medications-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
	}

	.empty-state {
		margin: 20px;
		padding: 30px 20px;
		background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
		border-radius: 20px;
		text-align: center;
		color: #2d3748;
		font-size: 18px;
		font-weight: 600;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.encouragement-message {
		margin: 20px;
		padding: 20px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 15px;
		text-align: center;
		color: white;
		font-size: 16px;
		font-weight: 600;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.s1 {
		font-size: 30px;
		padding: 10px;
		font-family: 'Dancing Script';
		color: steelblue;
	}

	.sb1 {
		display: flex;
	}
	.sb2 {
		width: 300px;
		height: 50px;
		display: flex;
		justify-content: space-evenly;
		align-items: space-between;
	}

	.sb3 {
		width: 300px;
		display: flex;
		justify-content: space-around;
	}

	.b1 {
		width: 300px;
		height: 220px;
		background-color: white;
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: lightblue;
		border: 3px solid white;
		border-radius: 30px;
	}

	.b1 > * {
		margin: 10px;
	}

	.title {
		width: 120px;
		height: 20px;
		font-size: 20px;
	}

	.ticon {
		width: 125px;
		color: steelblue;
		height: 20px;
		font-size: 18px;
	}

	.sicon {
		width: 105px;
		color: steelblue;
		height: 25px;
		border: 2px solid steelblue;
		border-radius: 20px;
	}

	.aicon {
		width: 105px;
		color: steelblue;
		height: 25px;
		border: 2px solid steelblue;
		border-radius: 20px;
	}

	.pill {
		width: 200px;
		color: steelblue;
		height: 80px;
		border: 2px solid steelblue;
		border-radius: 20px;
		font-size: 18px;
	}

	.icon {
		width: 25px;
		height: 25px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://cdn-icons-png.flaticon.com/512/212/212315.png');
		background-size: cover;
		background-position: center;
	}

	.titleB {
		font-size: 18px;
		width: 120px;
		height: 20px;
		margin-top: 1px;
		margin-left: -20px;
	}

	.iconB {
		width: 40px;
		height: 30px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://cdn-icons-png.flaticon.com/512/2233/2233561.png');
		background-size: cover;
		background-position: center;
	}

	.iconC {
		width: 40px;
		height: 30px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://www.freeiconspng.com/thumbs/blue-arrow-png/blue-arrow-png-22.png');
		background-size: cover;
		background-position: center;
	}

	.b2 {
		height: 135px;
		width: 300px;
		display: flex;
		justify-content: space-around;
		background-color: lightblue;
		border: 3px solid white;
		border-radius: 30px;
	}

	.sbb1 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title2 {
		margin-top: 10px;
		width: 120px;
		height: 20px;
		font-size: 25px;
		color: white;
		text-align: center;
		margin-top: -4px;
	}

	.icon2 {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://i.pinimg.com/originals/cf/1b/07/cf1b0723cde1750fc34af0f2a38e8414.jpg');
		background-size: cover;
		background-position: center;
		margin-top: 20px;
	}

	.b3 {
		display: flex;
		width: 322px;
		margin-top: 5px;
	}

	.bb3 {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border: 3px solid white;
	}

	.b3 > * {
		height: 145px;
		width: 145px;
		background-color: lightblue;
		border-radius: 30px;
		color: white;
		margin-left: 10px;
	}

	.sb4 {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 3px solid white;
	}

	.sb5 {
		width: 108px;
		display: flex;
		justify-content: space-between;
	}

	.sb4 > * {
		margin: 3px;
	}

	.bb32 {
		width: 120px;
		display: flex;
		justify-content: end;
		margin-top: -10px;
	}

	.title3,
	.title4 {
		padding-top: 5px;
		font-size: 20px;
		margin-top: 3px;
	}

	.timage {
		width: 80px;
		height: 80px;
		background-image: url('https://i.imgur.com/TEJXh0P.png');
		background-size: cover;
		background-position: center;
		border-radius: 40px;
	}

	.pimage {
		width: 120px;
		height: 118px;
		border-radius: 20px;
		border: 2px solid steelblue;
		background-image: url('https://png.pngtree.com/png-clipart/20211219/original/pngtree-may-2022-calendar-with-blue-aesthetic-abstract-background-png-image_6976709.png');
		background-size: cover;
		background-position: center;
		margin-top: 5px;
	}

	.pimage2 {
		width: 23px;
		height: 23px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://www.freeiconspng.com/thumbs/blue-arrow-png/blue-arrow-png-22.png');
		background-size: cover;
		background-position: center;
	}

	.wicon {
		width: 23px;
		height: 23px;
		background-image: url('https://static.vecteezy.com/system/resources/previews/017/172/379/non_2x/warning-message-concept-represented-by-exclamation-mark-icon-exclamation-symbol-in-triangle-png.png');
		background-size: cover;
		background-position: center;
		margin-bottom: -8px;
	}

	.micon {
		width: 23px;
		height: 23px;
		border-radius: 50px;
		border: 2px solid steelblue;
		background-image: url('https://www.freeiconspng.com/thumbs/blue-arrow-png/blue-arrow-png-22.png');
		background-size: cover;
		background-position: center;
	}

	.texti {
		font-size: 14px;
		width: 95px;
		color: steelblue;
		height: 52px;
		border: 1px solid steelblue;
		border-radius: 20px;
		text-align: center;
	}

	.weeks {
		display: flex;
	}

	.weeks > * {
		width: 30px;
		height: 30px;
		margin: 5px;
		text-align: center;
		border: 2px solid steelblue;
		border-radius: 15px;
		background-color: lightblue;
		font-size: 18px;
	}
</style>
