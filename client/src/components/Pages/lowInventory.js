
import React, { useEffect, useState } from "react"
import getItem from "../CustomHooks/GET"


const ItemRow = () => {

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        getItem("http://localhost:4567/getItems", setInventory)
    }, [])

  
    const filteredArray = inventory.filter(item => {
        return (item.capacity / item.stock) >= 4
    })
    
    return (
        <div>
            <h1>Low Stock Items</h1>
            {filteredArray.map(item => {
                return (
                    <div>
                        <div id="div" style={{ display: "flex", margin: 3, display: "flex" }} key={item.id}>
                            <p>Name: {item.productName}</p>
                            <p>Stock: {item.stock}</p>
                            <p>Capacity: {item.capacity}</p>
                        </div>
                    </div>
                )
            })}
            
        </div>

    )
}

export default ItemRow