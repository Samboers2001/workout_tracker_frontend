<script>
    import { Button, FormGroup, Input, Row, Col } from "sveltestrap";
    import { redirect } from "./router";
    import Apology from "./Apology.svelte";
    import { logIn } from "../models/accountModel";
  
  
    let error;
    let email;
    let password;
  
    const handleLogIn = () => {
      error = "";
      if (!email) {
        error = `No email provided\n`;
      }
      if (!password) {
        error += `No password provided\n`;
      }
      if (!error) {
        logIn(email, password)
        .then(() => {
          redirect("/")
        })
        .catch((err) => {
          error += `${err.message || err}\n`
        });
      }
    };
  
    const onKeyDown = kbEvent => {
      if (kbEvent.key === "Enter") {
        handleLogIn();
      }
    };
  </script>
  
  <style>
  
  </style>
  
  <Row>
    <Col sm="6" xl="4">
      <h1>Login</h1>
      {#if error}
        <Apology>{error}</Apology>
      {/if}
      <FormGroup>
        <Input
          bind:value={email}
          id="login_email"
          type="text"
          autofocus
          placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input
          on:keydown={onKeyDown}
          bind:value={password}
          type="password"
          id="login_password"
          placeholder="Password" />
      </FormGroup>
      <Button color="primary" id="loginButton" on:click={handleLogIn} type="submit">Log in</Button>
    </Col>
  </Row>
  