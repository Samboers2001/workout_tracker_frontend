<script>
  import { onMount } from "svelte";
  import { currentRoute, redirect } from "./route";

  export let path;
  export let exact = true;
  export let beforeRouting = null; // callback must return a promise
  export let showError = true;

  let promise;

  onMount(() => {
    if (window.location.pathname !== $currentRoute) {
      redirect(window.location.pathname);
    }
  });

  $: match =
    $currentRoute.indexOf(path) === 0 &&
    (exact ? $currentRoute.length === path.length : true);
  $: if (match && beforeRouting) {
    console.log(`Route.match & beforeRouting for '${path}'`);
    promise = beforeRouting(path);
  }
</script>

{#if match}
  {#if beforeRouting}
    {#await promise}
      <slot name="progress">
        <p>loading...</p>
      </slot>
    {:then}
      <slot />
    {:catch error}
      {#if showError}
        <h5>Something went wrong...</h5>
        <p>When routing url '{path}': {error.message || error}</p>
        <a href={$currentRoute}>Try again</a>
        <a href="/" style="padding-left: 2em;">Reset</a>
      {/if}
    {/await}
  {:else}
    <slot />
  {/if}
{/if}
