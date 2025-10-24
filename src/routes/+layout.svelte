<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen flex-col bg-blue-100">
	<main class="flex-grow overflow-y-auto">
		{@render children?.()}
	</main>
	<nav class="flex justify-around rounded-lg bg-blue-200 p-5">
		<a href="/">HOME</a>
		<a href="/menu">OLD HOME</a>
		<a href="/medication">MEDICATION</a>
		<a href="/contact">CONTACT</a>
		<a href="/history">HISTORY</a>
	</nav>
</div>
