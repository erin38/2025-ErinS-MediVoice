<div class="my-3 flex w-screen flex-col items-center space-y-3">
	<div class="s1">Medication History</div>

	<div class="s2">2025-08-11</div>

	<div class="my-grid">
		<div class="box">Field</div>
		<div class="box">Entry</div>
		<div class="box">
			Medication <div class="icon1"></div>
		</div>
		<div class="box">Advil</div>
		<div class="box">
			Date
			<div class="icon2"></div>
		</div>
		<div class="box">Tuesday, 7:00 AM (Seoul, Korea)</div>
		<div class="box">Taken / Missed</div>
		<div class="box">Taken</div>
	</div>

	<div class="s2">2025-05-07</div>
	<div class="my-grid">
		<div class="box">Field</div>
		<div class="box">Entry</div>
		<div class="box">
			Medication <div class="icon1"></div>
		</div>
		<div class="box">Advil</div>
		<div class="box">
			Date
			<div class="icon2"></div>
		</div>
		<div class="box">Tuesday, 4:00 PM (Venice, Italy)</div>
		<div class="box">Taken / Missed</div>
		<div class="box">Missed</div>
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.s1 {
		font-size: 30px;
		font-family: 'Dancing Script';
		padding: 10px;
		color: steelblue;
	}

	.s2 {
		font-size: 20px;
		font-family: 'Dancing Script';
		padding: 10px;
		color: steelblue;
	}

	.my-grid {
		display: grid;
		width: 300px;
		grid-template-columns: 50% 50%;
		grid-template-rows: 25% 25% 25% 25%;
		min-height: 42vh;
	}
	.my-grid > * {
		background-color: lightblue;
		border: 0.04cm solid white;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		text-align: center;
		font-family: 'Alumni Sans Pinstripe';
	}

	.icon1 {
		width: 25px;
		height: 25px;
		border-radius: 50px;
		border: 2px solid black;
		background-image: url('https://cdn-icons-png.flaticon.com/512/212/212315.png');
		background-size: cover;
		background-position: center;
		margin-left: 10px;
	}

	.icon2 {
		width: 34px;
		height: 34px;
		border-radius: 50px;
		background-image: url('https://i.pinimg.com/736x/90/81/53/9081535cbc850136be400990797688f1.jpg');
		background-size: cover;
		background-position: center;
		margin-left: 10px;
	}
</style>
