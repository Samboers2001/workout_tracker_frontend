import { writable } from "svelte/store";

const baseUrl = "https://localhost:7209/api/user"
export const account = writable()

export function register(Email, Password, Name) {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Email,
            Password,
            Name
        })
    }).then(res => {
        if (res.ok) {
            return null
        } else {
            switch (res.status) {
                case 400:
                    return res.json().then(err => {
                        console.log(err)
                        throw new Error(err.message)
                    })
                default:
                    throw new Error(res.statusText)
            }
        }
    }).catch(err => {
        throw err
    })
}