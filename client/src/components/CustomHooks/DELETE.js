

const deleteItem = (url) => {
    fetch(url, {
        method: "DELETE"
    })
    .then(() => console.log("Item deleted!"))
    .catch(error => console.log(error))


}
export default deleteItem 