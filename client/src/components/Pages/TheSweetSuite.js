import { useState, useEffect } from "react"
import get from "../CustomHooks/GET"

const TheSweetSuite = () => {

    const [sweet, setSweet] = useState([])

    useEffect(() => {
        get("http://localhost:4567/getSweetSuiteStock", setSweet)
        
    }, [])
    return(
        <>
        <h1>The Sweet Suite</h1>
        {sweet.map(item => {
            return(
                <div>
                    <p>Name: {item.productName}</p>
                    <p>Cost: {item.cost}</p>
                </div>
            )
        })}
        </>

    )
}
export default TheSweetSuite
