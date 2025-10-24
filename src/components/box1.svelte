<script>
	let { name, amt, time } = $props();
	let taken = $state(false);
</script>

<div
	class="b1 duration-2000"
	class:py-5={!taken}
	class:bg-blue-300={!taken}
	class:bg-gray-300={taken}
>
	<div class="sb1">
		<div class="icon"></div>
		<div class="title">{name}</div>
		<div class="ticon">({time})</div>
	</div>

	<button
		class="pill flex cursor-pointer items-center justify-center p-2"
		class:bg-orange-300={taken}
		onclick={() => (taken = !taken)}
	>
		{taken ? '✅' : ''}
		{amt}
	</button>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

	.s1 {
		font-size: 30px;
		font-family: 'Dancing Script';
	}

	.sb1 {
		display: flex;
		align-items: center;
	}
	.sb2 {
		display: flex;
		justify-content: space-evenly;
		align-items: space-between;
	}

	.sb3 {
		display: flex;
		justify-content: space-around;
	}

	.b1 {
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
