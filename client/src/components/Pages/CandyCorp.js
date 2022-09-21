import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import post from "../CustomHooks/POST"
import DistributorCard from "../DistributorCard"


const CandyCorp = () => {

    const [candy, setCandy] = useState([])
    const [itemName, setItemName] = useState("")
    const [itemTotalPrice, setItemTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        get("http://localhost:4567/getCandyCorpStock", setCandy)
    }, [])

    const handleClick = () => {
        const cartItems = { itemName, itemTotalPrice, totalQuantity }
        console.log(cartItems)
        post("http://localhost:4567/saveShoppingCartItem", cartItems)
    }

    const calculateTotalCost = (itemCost, itemAmmount) => (itemCost * itemAmmount).toFixed(2)

    return (
        <>

            <h1>Candy Corp</h1>
            {candy.map(item => {
                return (

                    <div key={item.id}>
                        <p>Name: {item.productName}</p>
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
                            setItemName(item.productName)
                            setItemTotalPrice(calculateTotalCost(item.cost, totalQuantity))
                        }}>Save to cart</button>
                    </div>

                )

            })}

        </>
    )
}
export default CandyCorp