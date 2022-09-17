import Inventory from "./dummyInventory.json"

const itemRow = () => {


    const add = (...args) => {
        return args.reduce((sum, ammount) => sum + ammount, 0)
    }
    console.log(add(5, 7, 2, 12))

    return (
        <>
            {Inventory.map((item) => {
                return (
                    <div id="card" key={item.id} style={{ display: "flex" }}>
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