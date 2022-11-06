import { writable } from "svelte/store"
export const exercises = writable([])
const baseUrl = "https://localhost:7209/api/exercise"

export function getAllExercises() {
  debugger
    fetch(baseUrl, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => {
        res.json()
          .then(data => {
            console.log(data)
            exercises.set(data)
          })
      }).catch(err => {
        console.log(err)
      })
}
