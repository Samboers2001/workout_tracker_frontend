const baseUrl = "https://localhost:7209/api/workoutsession"

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

export function startWorkout(Name) {
    if(authorize())
    return fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        },
        body: JSON.stringify({
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