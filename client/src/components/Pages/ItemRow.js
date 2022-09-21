
import React, { useState, useEffect} from "react"
import getItems from "../CustomHooks/GET"
import Card from "../InventoryCard"


const ItemRow = () => {

const [inventory, setInventory] = useState([])

useEffect(() => {
    getItems("http://localhost:4567/getItems", setInventory)
}, [])
    // const add = (...args) => {
    //     return args.reduce((sum, ammount) => sum + ammount, 0)
    // }
    // console.log(add(5, 7, 2, 12))

    return (
        <>
        
        <h1>Randy's Candies</h1>
            {inventory.map((item) => {
                return (
                    <div id="card" key={item.id} style={{ display: "flex" }}>
                        <Card name={item.productName} stock={item.stock}  capacity={item.capacity}/>
                        {/* <p>Name: {item.productName} </p>
                        <p>Stock: {item.stock} </p>
                        <p>Capacity: {item.capacity} </p> */}
                    </div>
                )

            })}
            
        </>
    )
}

export default ItemRow