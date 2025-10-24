<script>
	import { medications } from '$lib/medicationData.js';

	// Format days for display
	function formatDays(days) {
		if (days.length === 7) {
			return 'Every day';
		}
		if (days.length <= 3) {
			return days.join(', ');
		}
		return `${days.length} days/week`;
	}

	// Format times for display
	function formatTimes(times) {
		return times
			.map((time) => {
				const [hours, minutes] = time.split(':');
				const hour = parseInt(hours);
				const ampm = hour >= 12 ? 'PM' : 'AM';
				const hour12 = hour % 12 || 12;
				return `${hour12}:${minutes} ${ampm}`;
			})
			.join(', ');
	}
</script>

<div class="my-3 flex w-screen flex-col items-center space-y-4 p-4">
	<div class="page-header">
		<h1 class="page-title">All Medications ({medications.length})</h1>
		<button class="add-button">+ Add Medication</button>
	</div>

	<div class="medications-container">
		{#each medications as medication (medication.id)}
			<div class="med-card">
				<div class="card-header">
					<div class="med-icon-title">
						<div class="pill-icon">💊</div>
						<div>
							<div class="med-name">{medication.name}</div>
							<div class="med-dosage-text">{medication.dosage}</div>
						</div>
					</div>
					<div class="action-buttons">
						<button class="edit-button">✏️</button>
						<button class="delete-button">🗑️</button>
					</div>
				</div>

				<div class="med-details">
					<div class="detail-row">
						<span class="detail-label">Form & Amount:</span>
						<span class="detail-value"
							>{medication.amount}
							{medication.form.toLowerCase()}{medication.amount > 1 ? 's' : ''}</span
						>
					</div>
					<div class="detail-row">
						<span class="detail-label">Frequency:</span>
						<span class="detail-value">{medication.frequency}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Days:</span>
						<span class="detail-value">{formatDays(medication.days)}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Times:</span>
						<span class="detail-value">{formatTimes(medication.times)}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Purpose:</span>
						<span class="detail-value">{medication.purpose}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.page-header {
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		padding: 0 10px;
	}

	.page-title {
		font-size: 30px;
		font-family: 'Dancing Script';
		color: steelblue;
		margin: 0;
	}

	.add-button {
		background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
		color: white;
		border: 3px solid white;
		border-radius: 20px;
		padding: 12px 20px;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
		transition: all 0.2s ease;
	}

	.add-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	.medications-container {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.med-card {
		background: linear-gradient(135deg, #add8e6 0%, #87ceeb 100%);
		border: 3px solid white;
		border-radius: 25px;
		padding: 18px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease;
	}

	.med-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 15px;
		padding-bottom: 12px;
		border-bottom: 2px dashed white;
	}

	.med-icon-title {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.pill-icon {
		font-size: 32px;
		filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
	}

	.med-name {
		font-size: 22px;
		font-weight: bold;
		color: white;
		text-shadow: 1px 1px 2px rgba(70, 130, 180, 0.5);
	}

	.med-dosage-text {
		font-size: 16px;
		color: steelblue;
		font-weight: 600;
	}

	.action-buttons {
		display: flex;
		gap: 8px;
	}

	.edit-button,
	.delete-button {
		width: 40px;
		height: 40px;
		border: 2px solid white;
		border-radius: 12px;
		font-size: 18px;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.edit-button {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.edit-button:hover {
		background-color: #ffd700;
		transform: scale(1.1);
	}

	.delete-button {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.delete-button:hover {
		background-color: #ff6b6b;
		transform: scale(1.1);
	}

	.med-details {
		background-color: rgba(255, 255, 255, 0.35);
		border-radius: 15px;
		padding: 12px;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		margin: 8px 0;
		font-size: 14px;
		gap: 10px;
	}

	.detail-label {
		font-weight: bold;
		color: steelblue;
		flex-shrink: 0;
	}

	.detail-value {
		color: white;
		text-align: right;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		flex: 1;
	}
</style>
