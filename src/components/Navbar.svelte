<script>
    import { NavLink, Link, redirect } from "./router";
    import {
        Collapse,
        NavbarToggler,
        NavbarBrand,
        Nav,
        Navbar,
        NavItem,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap"
    import { deleteAccount, logOut } from "../models/accountModel";

    let isOpen = false;
    let loggedInUserId = (JSON.parse(localStorage.getItem("token")) || {}).id

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

    function handleDelete() {
      debugger
      deleteAccount(loggedInUserId)
      logOut()
      redirect("/")
    }

    function handleLogout() {
      logOut()
      redirect("/")
    }
</script>

<Navbar color="light" light expand="md">
    <NavbarBrand href="/">Workout Tracker</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink path="/exercise">Exercises</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Start workout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>History</NavLink>
        </NavItem>
        <NavItem>
          <NavLink path="/leaderboard">Leaderboard</NavLink>
        </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Account</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem on:click={handleDelete}>Delete account</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem on:click={handleLogout}>Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>

<style>
</style>