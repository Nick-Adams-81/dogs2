import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"


const DentistsHateUs = () => {

    const [dentist, setDentist] = useState([])

    useEffect(() => {
        get("http://localhost:4567/getDentistsHateUsStock", setDentist)
    }, [])

    return(
        <>
        <h1>Dentists Hate Us </h1>
        {dentist.map(item => {
            return(
                <div>
                    <p>Name: {item.itemName}</p>
                    <p>Cost: {item.cost}</p>
                </div>
            )
        })}
        </>
    )
}
export default DentistsHateUs