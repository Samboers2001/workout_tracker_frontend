<script>
  import { fly } from "svelte/transition";
  import { Button, FormGroup, Input, Row, Col } from "sveltestrap";
  import { redirect } from "./router";

  let visible = false;
  let register = false;
</script>

<Row>
  <Col>
    <img src="img/strong-app.png" alt="HookUp icon" id="logo" />
    <h1>Workout Tracker</h1>
    <h2>Become a better version of yourself.</h2>
  </Col>
</Row>
<Row>
  <Col md="6">
    <div class="card" style="width: 18rem;">
      <img src="img/work-out-home.jpg" alt="Man working out" id="homePhoto" />
      <div class="card-body">
        <h5 class="card-title">Information</h5>
        <p class="card-text">
          Workout tracker is an app where you can track your workouts and see
          your progress so you can improve everytime you go to the gym!
        </p>
        <Button color="primary" on:click={() => (visible = true)}
          >Show more</Button
        >
      </div>
    </div>
  </Col>
  <Col md="6">
    {#if visible}
      <div
        in:fly={{ x: 200, duration: 2000 }}
        class="card"
        style="width: 18rem;"
      >
        <img
          src="img/workout-get-started.jpg"
          class="card-img-top"
          alt="Women working out"
        />
        <div class="card-body">
          <h5 class="card-title">Let's get started</h5>
          <p class="card-text">
            Click on register if you do not have an account yet and click on log
            in if you already have an account. Enjoy!
          </p>
          <Button color="success" on:click={() => redirect("/register")}>
            Register
          </Button>
          <Button color="primary" on:click={() => redirect("/login")}>
            Log in
          </Button>
        </div>
      </div>
    {/if}
  </Col>
</Row>

<style>
  #logo {
    margin-top: 0.2em;
    margin-right: 1em;
    width: 5em;
    float: left;
  }
  #homePhoto {
    width: 100%;
  }
  .card {
    margin: 2em auto;
  }
</style>
