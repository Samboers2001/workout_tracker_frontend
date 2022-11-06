<script>
    import { Button, FormGroup, FormText, Input, Row, Col } from "sveltestrap";
    import { redirect } from "./router";
    import Apology from "./Apology.svelte";
    import { register } from "../models/accountModel";

    let email;
    let password;
    let name;
    let passwordCheck;
    let error;

    const handleRegister = () => {
        error = "";
        register(email, password, name).then(() => {
            redirect("/login");
        })
        .catch((err) => {
            error = `${err.message || err}\n`;
        });
    };
</script>

<Row>
    <Col sm="6" xl="4">
        <div class="register">
            <h1>Register</h1>
            {#if error}
                <Apology color="danger">{error}</Apology>
            {/if}
            <FormGroup>
                <Input
                    bind:value={name}
                    type="text"
                    placeholder="Name"
                    autofocus
                    id="name"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    bind:value={email}
                    type="text"
                    placeholder="Email"
                    autofocus
                    id="email"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    bind:value={password}
                    type="password"
                    placeholder="Password"
                    id="password"
                />
            </FormGroup>
            <FormGroup>
                <Button color="primary" id="registerButton" on:click={handleRegister} type="submit"
                    >Register</Button
                >
            </FormGroup>
        </div>
    </Col>
</Row>