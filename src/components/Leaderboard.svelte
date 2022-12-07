<script>
    import { onMount } from "svelte";
    import { openSocket } from "../modules/webSockets";
    import { leaderboard } from "../models/leaderboardModel";

    onMount(() => {
        openSocket();
    });
</script>

<h1>Leaderboard</h1>
<table>
    {#each $leaderboard as item}
        <tr>
            <td>{item.Username}</td>
            <td>{item.TotalWeight}</td>
        </tr>
    {/each}
</table>
