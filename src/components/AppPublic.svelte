<script>
	import Home from "./Home.svelte";
	import { Route, navHandler, redirect } from "./router";
	import Register from "./Register.svelte";
	import Login from "./Login.svelte";
	import { account } from "../models/accountModel";
	import AppSecure from "./AppSecure.svelte";
	import Exercise from "./Exercise.svelte";
    import Leaderboard from "./Leaderboard.svelte";
    import WorkoutSession from "./WorkoutSession.svelte";

	let theme = "superhero";
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
	{#if theme === "superhero"}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i
			class=" fa fa-sun-o"
			on:click={() => {
				theme = "united";
			}}
		/>
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i
		class="fa fa-moon-o"
			on:click={() => {
				theme = "superhero";
			}}
		/>
	{/if}

	{#if $account}
		<Route path="/" exact={false}>
			<AppSecure />
		</Route>
		<Route path="/exercise" exact={false}>
			<Exercise />
		</Route>
		<Route path="/leaderboard">
			<Leaderboard />
		</Route>
		<Route path="/workoutsession">
			<WorkoutSession />
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
	.fa {
		position: absolute;
		right: 1em;
		bottom: 1em;
	}
	.fa:hover {
		cursor: pointer;
	}
</style>
