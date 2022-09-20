import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import post from "../CustomHooks/POST"


const DentistsHateUs = () => {

    const [dentist, setDentist] = useState([])
    const [itemName, setItemName] = useState("")
    const [itemTotalPrice, setItemTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        get("http://localhost:4567/getDentistsHateUsStock", setDentist)
    }, [])

    const handleClick = () => {
        const cartItems = { itemName, itemTotalPrice, totalQuantity }
        console.log(cartItems)
        post("http://localhost:4567/saveShoppingCartItem", cartItems)
    }

    const calculateTotalCost = (itemCost, itemAmmount) => (itemCost * itemAmmount).toFixed(2)


    return(
        <>
        <h1>Dentists Hate Us</h1>
        {dentist.map(item => {
            return(
                <div>
                    <p>Name: {item.itemName}</p>
                    <p>Cost: {item.cost}</p>
                    <label htmlFor="input">quantity</label>
                        <input
                            id="input"
                            type="number"
                            value={totalQuantity}
                            onChange={(e) => setTotalQuantity(e.target.value)}
                        />
                        <button onClick={() => {
                            handleClick(item)
                            setItemName(item.itemName)
                            setItemTotalPrice(calculateTotalCost(item.cost, totalQuantity))
                        }}>Save to cart</button>
                </div>
            )
        })}
        </>
    )
}
export default DentistsHateUs