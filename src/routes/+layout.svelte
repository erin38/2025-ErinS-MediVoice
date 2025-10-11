<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-screen bg-gray-300 flex flex-col">
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<nav class="bg-gray-500 p-5 flex justify-around">
		<a href="/">HOME</a>
		<a href="/about">ABOUT</a>
	</nav>
</div>
