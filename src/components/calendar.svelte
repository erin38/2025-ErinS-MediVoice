<script>
	let { selectedDate, completedDates = [], onDateSelect } = $props();

	// Get current month info
	let currentMonth = $state(selectedDate.getMonth());
	let currentYear = $state(selectedDate.getFullYear());

	// Calculate days in month and starting day
	$effect(() => {
		currentMonth = selectedDate.getMonth();
		currentYear = selectedDate.getFullYear();
	});

	function getDaysInMonth(year, month) {
		return new Date(year, month + 1, 0).getDate();
	}

	function getFirstDayOfMonth(year, month) {
		return new Date(year, month, 1).getDay();
	}

	function isSelectedDate(day) {
		return (
			day === selectedDate.getDate() &&
			currentMonth === selectedDate.getMonth() &&
			currentYear === selectedDate.getFullYear()
		);
	}

	function isToday(day) {
		const today = new Date();
		return (
			day === today.getDate() &&
			currentMonth === today.getMonth() &&
			currentYear === today.getFullYear()
		);
	}

	function isCompletedDate(day) {
		const year = currentYear;
		const month = String(currentMonth + 1).padStart(2, '0');
		const dayStr = String(day).padStart(2, '0');
		const dateStr = `${year}-${month}-${dayStr}`;
		return completedDates.includes(dateStr);
	}

	function handleDateClick(day) {
		const newDate = new Date(currentYear, currentMonth, day);
		onDateSelect(newDate);
	}

	function navigateMonth(direction) {
		if (direction === 'prev') {
			if (currentMonth === 0) {
				currentMonth = 11;
				currentYear--;
			} else {
				currentMonth--;
			}
		} else {
			if (currentMonth === 11) {
				currentMonth = 0;
				currentYear++;
			} else {
				currentMonth++;
			}
		}
		// Update selected date to first day of new month
		const newDate = new Date(currentYear, currentMonth, 1);
		onDateSelect(newDate);
	}

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let daysInMonth = $derived(getDaysInMonth(currentYear, currentMonth));
	let firstDay = $derived(getFirstDayOfMonth(currentYear, currentMonth));
	let emptyDays = $derived(new Array(firstDay).fill(null));
	let days = $derived(new Array(daysInMonth).fill(0).map((_, i) => i + 1));
</script>

<div class="calendar-container">
	<div class="calendar-header">
		<button onclick={() => navigateMonth('prev')} class="nav-button">Prev</button>
		<div class="month-year">{monthNames[currentMonth]} {currentYear}</div>
		<button onclick={() => navigateMonth('next')} class="nav-button">Next</button>
	</div>

	<div class="grid grid-cols-7 gap-1">
		<div class="day-label">S</div>
		<div class="day-label">M</div>
		<div class="day-label">T</div>
		<div class="day-label">W</div>
		<div class="day-label">Th</div>
		<div class="day-label">F</div>
		<div class="day-label">Sa</div>

		{#each emptyDays as _}
			<div class="empty-day"></div>
		{/each}

		{#each days as day}
			<button
				class="day-cell"
				class:selected={isSelectedDate(day)}
				class:today={isToday(day)}
				class:completed={isCompletedDate(day)}
				onclick={() => handleDateClick(day)}
			>
				<span class="day-number">{day}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.calendar-container {
		width: 100%;
		max-width: 350px;
		background-color: white;
		border-radius: 20px;
		padding: 15px;
		border: 3px solid lightblue;
	}

	.calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.month-year {
		font-size: 18px;
		font-weight: bold;
		color: steelblue;
	}

	.nav-button {
		background-color: lightblue;
		border: 2px solid steelblue;
		border-radius: 10%;
		height: 35px;
		font-size: 14px;
		color: steelblue;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
		padding: 0 10px;
	}

	.nav-button:hover {
		background-color: steelblue;
		color: white;
	}

	.day-label {
		text-align: center;
		font-weight: bold;
		color: steelblue;
		padding: 8px;
		font-size: 14px;
	}

	.day-cell {
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		cursor: pointer;
		background-color: white;
		color: steelblue;
		font-size: 14px;
		transition: all 0.2s;
		position: relative;
		padding: 4px;
	}

	.day-cell:hover {
		background-color: #e3f2fd;
		transform: scale(1.05);
	}

	.day-cell.selected {
		background-color: steelblue;
		color: white;
		border-color: steelblue;
		font-weight: bold;
	}

	.day-cell.today {
		border-color: #ff6b6b;
		border-width: 3px;
	}

	.day-cell.completed {
		background: linear-gradient(135deg, #90ee90 0%, #98fb98 100%);
		border-color: #32cd32;
	}

	.day-cell.completed.selected {
		background: linear-gradient(135deg, #2e7d32 0%, #388e3c 100%);
		color: white;
	}

	.day-number {
		font-weight: 600;
	}

	.completion-badge {
		position: absolute;
		top: 2px;
		right: 2px;
		font-size: 10px;
		color: #228b22;
		font-weight: bold;
	}

	.day-cell.selected .completion-badge {
		color: white;
	}

	.empty-day {
		aspect-ratio: 1;
	}
</style>
