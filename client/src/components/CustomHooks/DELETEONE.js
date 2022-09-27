

const deleteOne = (id) => {
    fetch(`http://localhost:4567/deleteOneCartItem/${id}`, {
        method: "DELETE"
    })
    .then(() => console.log(`Item deleted!`))
    .catch(error => console.log(error))
}

export default deleteOne