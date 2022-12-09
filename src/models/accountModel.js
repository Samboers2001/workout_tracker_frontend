import { writable } from "svelte/store";

const baseUrl = "https://localhost:7209/api/user"
export const account = writable()
account.set(JSON.parse(localStorage.getItem("token") || null))
let jwtToken;

const authorize = () => {
    if (!jwtToken) {
        jwtToken = (JSON.parse(localStorage.getItem("token")) || {}).token
    }
    if (jwtToken) {
        return true
    }
    return false
}

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

export async function logIn(Email, Password) {
    return fetch(`${baseUrl}/authenticate`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            Email,
            Password
        })
    }).then(res => {
        if (res.ok) {
            res.json().then((data) => {
                console.log(data)
                account.set(data)
                localStorage.setItem("token", JSON.stringify(data))
            })
            return null
        } else {
            debugger
            switch (res.status) {
                case 400:
                    return res.json().then(err => {
                        throw new Error(err.message)
                    })
                default:
                    throw new Error(res.statusText)
            }
        }
    }
    ).catch(err => {
        throw err
    })
}

export async function deleteAccount(userId) {
    if (authorize())
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
        headers: {
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
            "Content-Type": 'application/json',
            'Authorization': 'Bearer ' + jwtToken,
        }
    })  .catch(error => {
            console.log(error);
        });
}

export function logOut()
{
    account.set()
    localStorage.setItem("token", "")
}