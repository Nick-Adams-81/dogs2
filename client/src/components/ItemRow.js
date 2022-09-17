
import Inventory from "./dummyInventory.json"



const itemRow = () => {

    const filteredArray = Inventory.filter(item => {
        return (item.Capacity / item.Stock) >= 4
    })

        console.log(filteredArray)

    return (
        <>
        {filteredArray.map(item => {
            return (
            <div key={item.id} style={{outline: "1 px solid-black"}}>
                <p>Name: {item.Name}</p>
                <p>Stock: {item.Stock}</p>
                <p>Capacity: {item.Capacity}</p>

            </div>
            )
        })}
        </>
        
    )
}

export default itemRow