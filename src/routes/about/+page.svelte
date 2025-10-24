<div>pill page tracking</div>

<div class="s1">Upcoming Medications (4)</div>

<div class="b1">
	<div class="t">
		<div class="icon1"></div>
		<div class="title1">Advil</div>
	</div>
	<div class="icon2"></div>
	<div class="t">
		<div></div>
		<div class="med1">200 mg, 1 capsule</div>
	</div>
	<div></div>
	<div>
		<div class="sh1">Scheduled: Tuesday, 7:00 AM</div>
	</div>
	<div class="shicon"></div>
</div>

<div class="b1">
	<div class="t">
		<div class="icon1"></div>
		<div class="title1">Omega 3</div>
	</div>
	<div class="icon2"></div>
	<div class="t">
		<div></div>
		<div class="med1">400 mg, 2 capsules</div>
	</div>
	<div></div>
	<div>
		<div class="sh1">Scheduled: Tuesday, 11:11 AM</div>
	</div>
	<div class="shicon"></div>
</div>

<div class="b1">
	<div class="t">
		<div class="icon1"></div>
		<div class="title1">Tylenol</div>
	</div>
	<div class="icon2"></div>
	<div class="t">
		<div></div>
		<div class="med1">160 mg, 5 mL (dosage)</div>
	</div>
	<div></div>
	<div>
		<div class="sh1">Scheduled: Thursday, 9:30 PM</div>
	</div>
	<div class="shicon"></div>
</div>

<div class="b1">
	<div class="t">
		<div class="icon1"></div>
		<div class="title1">Tylenol</div>
	</div>
	<div class="icon2"></div>
	<div class="t">
		<div></div>
		<div class="med1">350 mg, 4 mL (injection)</div>
	</div>
	<div></div>
	<div>
		<div class="sh1">Scheduled: Friday, 12:00 PM</div>
	</div>
	<div class="shicon"></div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.s1 {
		font-size: 26px;
		padding: 10px;
		font-family: 'Dancing Script';
	}

	.t {
		display: grid;
		grid-template-columns: 40px 1fr;
	}

	.b1 {
		height: 90px;
		width: 260px;
		padding: 15px;
		display: grid;
		grid-template-rows: 30% 45% 20%;
		grid-template-columns: 90% 10%;
		background-color: lightblue;
		border: 4px solid white;
		border-radius: 30px;
	}

	.title1 {
		font-size: 20px;
	}

	.icon1 {
		width: 25px;
		height: 25px;
		border-radius: 50px;
		border: 2px solid black;
		background-image: url('https://cdn-icons-png.flaticon.com/512/212/212315.png');
		background-size: cover;
		background-position: center;
	}

	.icon2 {
		width: 35px;
		height: 25px;
		border-radius: 50px;
		border: 2px solid white;
		background-image: url('https://www.svgimages.com/svg-image/s3/3-dot-symbol-light-blue-256x256.png');
		background-size: cover;
		background-position: center;
	}

	.med1 {
		font-size: 16px;
	}

	.sh1 {
		width: 200px;
		padding: 3px;
		border: 2px solid white;
		border-radius: 15px;
	}

	.shicon {
		width: 32px;
		height: 32px;
		border-radius: 50px;
		background-image: url('https://cdn-icons-png.freepik.com/512/6645/6645163.png');
		background-size: cover;
		background-position: center;
	}
</style>
