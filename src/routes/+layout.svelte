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
	<nav class="navigation-bar">
		<a href="/" class="nav-tab">
			<span class="nav-icon">🏠</span>
			<span class="nav-label">HOME</span>
		</a>
		<a href="/medication" class="nav-tab">
			<span class="nav-icon">💊</span>
			<span class="nav-label">MEDICATION</span>
		</a>
		<a href="/contact" class="nav-tab">
			<span class="nav-icon">📞</span>
			<span class="nav-label">CONTACT</span>
		</a>
	</nav>
</div>

<style>
	.navigation-bar {
		display: flex;
		justify-content: space-around;
		background: linear-gradient(180deg, #87ceeb 0%, #add8e6 100%);
		padding: 12px 10px;
		border-top: 3px solid white;
		box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
	}

	.nav-tab {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		padding: 8px 16px;
		border-radius: 15px;
		text-decoration: none;
		transition: all 0.2s ease;
		background-color: rgba(255, 255, 255, 0.3);
		border: 2px solid transparent;
		min-width: 90px;
	}

	.nav-tab:hover {
		background-color: rgba(255, 255, 255, 0.6);
		transform: translateY(-3px);
		border-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.nav-tab:active {
		transform: translateY(-1px);
	}

	.nav-icon {
		font-size: 24px;
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
	}

	.nav-label {
		font-size: 12px;
		font-weight: bold;
		color: steelblue;
		letter-spacing: 0.5px;
	}
</style>
