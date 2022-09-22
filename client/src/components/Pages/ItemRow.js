
import React, { useState, useEffect } from "react"
import getItems from "../CustomHooks/GET"
import Card from "../InventoryCard"



const ItemRow = () => {

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        getItems("http://localhost:4567/getItems", setInventory)
    }, [])

    return (
        <div>

            <h1 style={{ marginLeft: 140 }}>Randy's Candies</h1>
            {inventory.map((item) => {
                return (
                    <div key={item.id}>
                        <Card name={item.productName} stock={item.stock} capacity={item.capacity} />
                    </div>
                )
            })}

        </div>


    )
}

export default ItemRow