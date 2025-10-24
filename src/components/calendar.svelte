<script>
	let days = new Array(31).fill(0); // [0, 0,0,0,0,0,0 ]
</script>

<div class="grid grid-cols-7">
	<div>S</div>
	<div>M</div>
	<div>T</div>
	<div>W</div>
	<div>Th</div>
	<div>F</div>
	<div>Sa</div>
	{#each days as v, i}
		<div class="flex items-center justify-center border p-2">{i + 1}</div>
	{/each}
</div>
