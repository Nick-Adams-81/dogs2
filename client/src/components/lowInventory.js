
// import { useEffect, useState } from "react"
import Inventory from "./dummyInventory.json"


const itemRow = () => {

    // TODO: get real data from server and set data to inventory method //
    // const [inventory, serInventory] = useState([])


   /* TODO: make sure fetch is getting data from server and setting the incoming data
   to inventory method in useState hook
   */
    // useEffect(() => {
    //     fetch("http://localhost:4567/low-stock")
    //         .then(res => res.json)
    //         .then(data => setInventory(data))
    //         .catch(err => console.group(err))
    // })


    // TODO: change Inventory filter to inventory var in use state hook
    const filteredArray = Inventory.filter(item => {
        return (item.Capacity / item.Stock) >= 4
    })
    console.log(filteredArray)

    // TODO : figure out why only one element in array is eing toggled 
    const toggleVisibility = () => {

        let div = document.getElementById("div")
        if (div.style.display === "flex") {
            div.style.display = "none"
        } else {
            div.style.display = "flex"
        }
    }

    return (
        <div>
            {filteredArray.map(item => {
                return (
                    <div>
                        <div id="div" style={{ display: "flex", margin: 3, display: "flex" }} key={item.id}>
                            <p>Name: {item.Name}</p>
                            <p>Stock: {item.Stock}</p>
                            <p>Capacity: {item.Capacity}</p>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => toggleVisibility()}>click me</button>
        </div>

    )
}

export default itemRow