<script>
    import { onMount } from "svelte";
    import { ListGroup, ListGroupItem } from "sveltestrap";
    import {exercises, getAllExercises} from "../models/exerciseModel"

    onMount( () => {
        getAllExercises()
    })
</script>
{#each $exercises as exercise}
<ListGroup>
    <ListGroupItem>{exercise.name}</ListGroupItem>
</ListGroup>
{/each}