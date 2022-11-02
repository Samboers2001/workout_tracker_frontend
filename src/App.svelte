<script>
	import Exercise from "./components/Exercise.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Route from "./components/router/Route.svelte"

	export let name;
</script>

<svelte:head>
	<link
		href={`https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/superhero/bootstrap.min.css`}
		rel="stylesheet"
		crossorigin="anonymous"
	/>
</svelte:head>

<main>
	<Navbar />
	<Route path="/exercise">
		<Exercise />
	</Route>
</main>

<style>
</style>
