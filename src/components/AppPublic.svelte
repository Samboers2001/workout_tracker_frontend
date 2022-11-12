<script>
	import Home from "./Home.svelte";
	import { Route, navHandler, redirect } from "./router";
	import Register from "./Register.svelte";
	import Login from "./Login.svelte";
	import { account } from "../models/accountModel";
    import AppSecure from "./AppSecure.svelte";
    import Exercise from "./Exercise.svelte";

	let theme = "superhero";

	function handleThemeSwitch() {
		if (theme === "superhero") {
			theme = "united";
		} else if (theme === "united") {
			theme = "superhero";
		}
	}
</script>

<svelte:window on:popstate={navHandler} />
<svelte:head>
	<link
		href={`https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${theme}/bootstrap.min.css`}
		rel="stylesheet"
		crossorigin="anonymous"
	/>
</svelte:head>
<div class="container-fluid">
	{#if $account}
		<Route path="/" exact={false}>
			<AppSecure />
		</Route>
		<Route path="/exercise" exact={false}>
			<Exercise />
		</Route>
	{:else}
		<Route path="/">
			<Home />
		</Route>
		<Route path="/register">
			<Register />
		</Route>
		<Route path="/login">
			<Login />
		</Route>
	{/if}
</div>

<style>
	@media (min-width: 640px) {
	}
	.fas {
		position: absolute;
		right: 1em;
		bottom: 1em;
	}
	.fas:hover {
		cursor: pointer;
	}
</style>
