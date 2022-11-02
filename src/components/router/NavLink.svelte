<script>
  import { redirect } from "./route";

  export let path = null;
</script>

<!-- Both preventDefault & on:click forwarding needed otherwise a full page refresh occurs on every click -->
<a
  class="nav-link"
  href={path || '#'}
  on:click|preventDefault={() => (path ? redirect(path) : null)}
  on:click>
  <slot />
</a>
