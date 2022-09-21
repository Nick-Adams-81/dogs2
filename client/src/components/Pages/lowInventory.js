
import React, { useEffect, useState } from "react"
import getItem from "../CustomHooks/GET"
import Card from "../InventoryCard"


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
            <h1 style={{ marginLeft: 140 }}>Low Stock Items</h1>
            {filteredArray.map(item => {
                return (
                    
                    <div key={item.id}>
                        <Card name={item.productName} stock={item.stock}  capacity={item.capacity}/>
                    </div>
                )
            })}
            
        </div>

    )
}

export default ItemRow