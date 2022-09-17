import Inventory from "./dummyInventory.json"

const itemRow = () => {

    return (
        <>
        {Inventory.map((item) => {
            return (
                <div id="card" key={item.id}>
                <p>{item.Name}</p>
                <p>{item.Stock}</p>
                <p>{item.Capacity}</p>
            </div>
            )
            
        })}
        </>
    )
}

export default itemRow