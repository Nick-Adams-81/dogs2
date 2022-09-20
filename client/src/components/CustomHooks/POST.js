

const post = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => console.log("new item added!"))
    .catch(error => console.log(error))
}

export default post