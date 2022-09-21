import React, { useState, useEffect} from "react"
import get from "../CustomHooks/GET"
// import deleteItem from "../CustomHooks/delete"

const ShoppingCart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        get("http://localhost:4567/getAllShoppingCartItems", setData)
    }, [])
    return(
        <>
        <h1>Your Cart</h1>
        {data.map(item => {
            return(
                <div key={item.id}>
                    <p>Item Name: {item.itemName}</p>
                    <p>Quantity: {item.totalQuantity}</p>
                    <p>Total Price: {item.itemTotalPrice}</p>
                </div>
            )
        })}
        </>

    )
}
export default ShoppingCart