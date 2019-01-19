const userEvents = user => {
    return fetch(`https://api.github.com/users/${user}/events`)
        .then(response => response.json())
}

export { userEvents };