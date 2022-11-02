<script>
  import { currentRoute, redirect } from "./route";

  export let path;

  $: active = $currentRoute.indexOf(path) !== -1;
</script>

<style>
  a {
    color: inherit;
  }
  a.active {
    font-weight: bolder;
    color: var(--primary);
  }
</style>

<!-- Both preventDefault & on:click forwarding needed otherwise a full page refresh occurs on every click -->
<a
  class:active
  href={path || '#'}
  on:click|preventDefault={() => (path ? redirect(path) : null)}
  on:click>
  <slot />
</a>
