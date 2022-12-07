<script>
    import { onMount } from "svelte";
    import { openSocket } from "../modules/webSockets";
    import { leaderboard } from "../models/leaderboardModel";
    import { Table } from "sveltestrap";

    onMount(() => {
        openSocket();
    });
</script>

<h1>Leaderboard</h1>
{#each $leaderboard as item}
    
<Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Total weight lifted</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{item.Username}</td>
        <td>{item.TotalWeight}</td>
      </tr>
    </tbody>
  </Table>
{/each}
