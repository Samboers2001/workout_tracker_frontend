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

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
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
          <NavLink>Templates</NavLink>
        </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Account</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>

<style>
</style>