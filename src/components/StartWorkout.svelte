<script>
    import { Button, FormGroup, Label, Input } from "sveltestrap";
    import { startWorkout } from "../models/workoutsessionModel";
    let workoutName;
    let date = new Date();
    let newDate = date.toUTCString();

    const handleStartWorkout = () => {
        startWorkout(workoutName)
    }
    {

    }
</script>

<h1>Start workout</h1>
<FormGroup>
    <Label for="workoutName">Workout Name</Label>
    <Input
        bind:value={workoutName}
        placeholder="Workout {newDate}"
    />
</FormGroup>
<Button on:click={handleStartWorkout} color="success">Start</Button>

<style>
</style>
