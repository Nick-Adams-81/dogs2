import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"

const CandyCorp = () => {

    const [candy, setCandy] = useState([])

    useEffect(() => {
        get("http://localhost:4567/getCandyCorpStock", setCandy)
    }, [])
    return (
        <>
        <h1>Candy Corp</h1>
            {candy.map(item => {
                return (
                    <div>
                        <p>Name: {item.productName}</p>
                        <p>Cost: {item.cost}</p>
                    </div>
                )

            })}

        </>
    )
}
export default CandyCorp