<script>
	import Exercise from "./Exercise.svelte";
    import Home from "./Home.svelte";
	import Navbar from "./Navbar.svelte";
    import Register from "./Register.svelte";
	import Route from "./router/Route.svelte"

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
	<Route path="/exercise">
		<Exercise />
	</Route>
	<Route path="/home">
		<Home />
	</Route>
	<Route path="/register">
		<Register />
	</Route></main>

<style>
</style>
