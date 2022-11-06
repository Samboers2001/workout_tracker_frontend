<script>
    import { Alert } from "sveltestrap";
    export let color = "info";
</script>

<Alert {color}>
    <div>
        <slot />
    </div>
</Alert>

<style>
    div {
        white-space: pre-wrap;
    }
</style>
