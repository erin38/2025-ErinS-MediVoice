<div class="my-3 flex w-screen flex-col items-center space-y-3">
	<div class="s1">Emergency Contacts</div>

	<div class="b2">
		<div class="icon1"></div>

		<div>
			<div class="name">Jalene</div>
			<div class="rel">Sister</div>
		</div>

		<div class="t3">
			<div></div>
			<div class="pho">949-918-3525</div>
		</div>

		<div class="icon2"></div>
	</div>

	<div class="b2">
		<div class="icon1"></div>

		<div>
			<div class="name">June</div>
			<div class="rel">Brother</div>
		</div>

		<div class="t3">
			<div></div>
			<div class="pho">949-452-0585</div>
		</div>

		<div class="icon2"></div>
	</div>

	<div class="b2">
		<div class="icon1"></div>

		<div>
			<div class="name">Liz</div>
			<div class="rel">Friend</div>
		</div>

		<div class="t3">
			<div></div>
			<div class="pho">949-154-2380</div>
		</div>

		<div class="icon2"></div>
	</div>

	<div class="b2">
		<div class="icon1"></div>

		<div>
			<div class="name">Inwon</div>
			<div class="rel">Dad</div>
		</div>

		<div class="t3">
			<div></div>
			<div class="pho">949-560-2846</div>
		</div>

		<div class="icon2"></div>
	</div>

	<div class="b2">
		<div class="icon1"></div>

		<div>
			<div class="name">Helena</div>
			<div class="rel">Mom</div>
		</div>

		<div class="t3">
			<div></div>
			<div class="pho">949-546-1927</div>
		</div>

		<div class="icon2"></div>
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

	.t {
		display: grid;
		grid-template-columns: 50px 1fr;
	}

	.t2 {
		display: grid;
		grid-template-columns: 26% 28% 46%;
	}

	.t3 {
		display: grid;
		grid-template-rows: 55% 60%;
	}

	.b1 {
		height: 40px;
		width: 300px;
		padding: 15px;
		display: grid;
		grid-template-rows: 60% 40%;
		grid-template-columns: 80% 20%;
		background-color: lightblue;
		border: 4px solid white;
		border-radius: 20px;
	}

	.b2 {
		height: 90px;
		width: 300px;
		padding: 15px;
		display: grid;
		grid-template-rows: 100% 0%;
		grid-template-columns: 17% 25% 45% 1%;
		background-color: rgb(173, 216, 230);
		border: 2.5px solid white;
		border-radius: 20px;
		margin-bottom: 15px;
	}

	.name {
		font-size: 21px;
		padding: 5px;
		margin-bottom: 7px;
		color: white;
		margin-left: -10px;
	}

	.icon1 {
		width: 35px;
		height: 35px;
		border-radius: 40px;
		border: 2px lightblue;
		background-image: url('https://i.pinimg.com/236x/ff/be/5a/ffbe5acba5f705934c3abc4b2d377ee6.jpg');
		background-size: cover;
		background-position: center;
		margin-top: 10px;
	}

	.icon2 {
		width: 35px;
		height: 25px;
		border-radius: 50px;
		border: 2px solid white;
		background-image: url('https://i.pinimg.com/736x/b2/03/76/b203769b394777666e5187e26d5be465.jpg');
		background-size: cover;
		background-position: center;
		margin-top: 8px;
	}

	.rel {
		font-size: 18px;
		margin-top: -18px;
		margin-left: -5px;
		color: navy;
	}

	.pho {
		width: 130px;
		padding: 3px;
		border: 2px solid steelblue;
		border-radius: 15px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: steelblue;
		margin-top: 6px;
	}
</style>
