<script>
	let { medication, onCompletionChange } = $props();

	// Track taken status for each time slot separately
	let takenTimes = $state(medication.times.map(() => false));

	// Format time from 24-hour to 12-hour format
	function formatTime(time24) {
		const [hours, minutes] = time24.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const hour12 = hour % 12 || 12;
		return `${hour12}:${minutes} ${ampm}`;
	}

	// Check if all times are taken
	let allTaken = $derived(takenTimes.every((t) => t === true));

	// Notify parent when completion status changes
	$effect(() => {
		if (onCompletionChange) {
			onCompletionChange(medication.id, allTaken);
		}
	});
</script>

<div class="med-card" class:all-taken={allTaken}>
	<div class="med-header">
		<div class="pill-icon">💊</div>
		<div class="med-title-section">
			<div class="med-name">{medication.name}</div>
			<div class="med-dosage">{medication.dosage}</div>
		</div>
	</div>

	<div class="med-info">
		<div class="info-row">
			<span class="info-label">📋</span>
			<span class="info-text"
				>{medication.form} • {medication.amount}
				{medication.form.toLowerCase()}{medication.amount > 1 ? 's' : ''}</span
			>
		</div>
		<div class="info-row">
			<span class="info-label">ℹ️</span>
			<span class="info-text">{medication.purpose}</span>
		</div>
	</div>

	<div class="time-buttons">
		{#each medication.times as time, index}
			<button
				class="time-button"
				class:taken={takenTimes[index]}
				onclick={() => (takenTimes[index] = !takenTimes[index])}
			>
				<div class="time-label">{formatTime(time)}</div>
				<div class="check-status">{takenTimes[index] ? '✓' : '○'}</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.med-card {
		width: 100%;
		max-width: 320px;
		background: linear-gradient(135deg, #add8e6 0%, #87ceeb 100%);
		border: 3px solid white;
		border-radius: 25px;
		padding: 18px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		margin: 10px 0;
	}

	.med-card.all-taken {
		background: linear-gradient(135deg, #b0b0b0 0%, #d3d3d3 100%);
		opacity: 0.8;
	}

	.med-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
		padding-bottom: 10px;
		border-bottom: 2px dashed white;
	}

	.pill-icon {
		font-size: 32px;
		filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
	}

	.med-title-section {
		flex: 1;
	}

	.med-name {
		font-size: 20px;
		font-weight: bold;
		color: white;
		text-shadow: 1px 1px 2px rgba(70, 130, 180, 0.5);
	}

	.med-dosage {
		font-size: 15px;
		color: steelblue;
		font-weight: 600;
	}

	.med-info {
		background-color: rgba(255, 255, 255, 0.35);
		border-radius: 15px;
		padding: 10px;
		margin-bottom: 12px;
	}

	.info-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 6px 0;
		font-size: 14px;
		color: white;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.info-label {
		font-size: 16px;
		flex-shrink: 0;
	}

	.info-text {
		flex: 1;
		line-height: 1.4;
	}

	.time-buttons {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.time-button {
		flex: 1;
		min-width: 120px;
		background-color: white;
		border: 3px solid steelblue;
		border-radius: 18px;
		padding: 10px 15px;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.time-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.time-button.taken {
		background: linear-gradient(135deg, #90ee90 0%, #98fb98 100%);
		border-color: #32cd32;
	}

	.time-label {
		font-size: 16px;
		font-weight: bold;
		color: steelblue;
	}

	.time-button.taken .time-label {
		color: #228b22;
	}

	.check-status {
		font-size: 22px;
		font-weight: bold;
		color: steelblue;
	}

	.time-button.taken .check-status {
		color: #228b22;
	}
</style>
