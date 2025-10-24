<div class="my-3 flex w-screen flex-col items-center space-y-4 p-4">
	<h1 class="page-title">Emergency Contacts</h1>

	<div class="contacts-container">
		<div class="contact-card">
			<div class="contact-header">
				<div class="contact-icon">👤</div>
				<div class="contact-info">
					<div class="contact-name">Jalene</div>
					<div class="contact-rel">Sister</div>
				</div>
			</div>
			<div class="contact-phone">📞 949-918-3525</div>
		</div>

		<div class="contact-card">
			<div class="contact-header">
				<div class="contact-icon">👤</div>
				<div class="contact-info">
					<div class="contact-name">June</div>
					<div class="contact-rel">Brother</div>
				</div>
			</div>
			<div class="contact-phone">📞 949-452-0585</div>
		</div>

		<div class="contact-card">
			<div class="contact-header">
				<div class="contact-icon">👤</div>
				<div class="contact-info">
					<div class="contact-name">Liz</div>
					<div class="contact-rel">Friend</div>
				</div>
			</div>
			<div class="contact-phone">📞 949-154-2380</div>
		</div>

		<div class="contact-card">
			<div class="contact-header">
				<div class="contact-icon">👤</div>
				<div class="contact-info">
					<div class="contact-name">Inwon</div>
					<div class="contact-rel">Dad</div>
				</div>
			</div>
			<div class="contact-phone">📞 949-560-2846</div>
		</div>

		<div class="contact-card">
			<div class="contact-header">
				<div class="contact-icon">👤</div>
				<div class="contact-info">
					<div class="contact-name">Helena</div>
					<div class="contact-rel">Mom</div>
				</div>
			</div>
			<div class="contact-phone">📞 949-546-1927</div>
		</div>
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.page-title {
		font-size: 30px;
		font-family: 'Dancing Script';
		color: steelblue;
		margin-bottom: 10px;
	}

	.contacts-container {
		width: 100%;
		max-width: 400px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.contact-card {
		background: linear-gradient(135deg, #add8e6 0%, #87ceeb 100%);
		border: 3px solid white;
		border-radius: 25px;
		padding: 18px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.contact-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.contact-header {
		display: flex;
		align-items: center;
		gap: 15px;
		padding-bottom: 10px;
		border-bottom: 2px dashed white;
	}

	.contact-icon {
		font-size: 40px;
		filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
	}

	.contact-info {
		flex: 1;
	}

	.contact-name {
		font-size: 24px;
		font-weight: bold;
		color: white;
		text-shadow: 1px 1px 2px rgba(70, 130, 180, 0.5);
	}

	.contact-rel {
		font-size: 16px;
		color: steelblue;
		font-weight: 600;
	}

	.contact-phone {
		background-color: rgba(255, 255, 255, 0.4);
		border: 2px solid steelblue;
		border-radius: 15px;
		padding: 10px 15px;
		text-align: center;
		color: steelblue;
		font-size: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
</style>
