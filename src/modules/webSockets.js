import { leaderboard } from "../models/leaderboardModel"
export function openSocket() {
    let socket = new WebSocket("wss://localhost:7209")
    socket.onopen = function(e)
    {
        console.log("Websocket connection established")
    }
    socket.onmessage = function(event)
    {
        console.log(event)
        leaderboard.set(JSON.parse(event.data)) 
    }
}
