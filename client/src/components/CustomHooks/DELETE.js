

const deleteItem = (url, id) => {
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    .then(() => console.log("Item deleted!"))
    .catch(error => console.log(error))


}
export default deleteItem 