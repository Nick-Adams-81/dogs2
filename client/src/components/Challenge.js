
import LowInventory from "./Pages/lowInventory"
import ItemRow from "./Pages/ItemRow"
import CandyCorp from "./Pages/CandyCorp"
import TheSweetSuite from "./Pages/TheSweetSuite"
import DentistsHateUs from "./Pages/DentistsHateUs"
import {Routes, Route, Link } from "react-router-dom"
import ShoppingCart from "./Pages/ShoppingCart"

const Challenge = () => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>SKU</td>
            <td>Item Name</td>
            <td>Amount in Stock</td>
            <td>Capacity</td>
            <td>Order Amount</td>
          </tr>
        </thead>
        <tbody>
          {/* 
          TODO: Create an <ItemRow /> component that's rendered for every inventory item. The component
          will need an input element in the Order Amount column that will take in the order amount and 
          update the application state appropriately.
          */}
          {/* <CandyCorp /> */}
          {/* <ShoppingCart /> */}

        </tbody>
      </table>
      {/* TODO: Display total cost returned from the server */}
      <div>Total Cost: </div>
      {/* 
      TODO: Add event handlers to these buttons that use the Java API to perform their relative actions.
      */}
      <button>Get Low-Stock Items</button>
      <button><Link to="/candy-corp"></Link>Determine Re-Order Cost</button>
      <button><Link to="/theSweetSuite"></Link> the sweet suite</button>
      <Routes>
        <Route path="/low-inventory" element={<LowInventory />}/>
        <Route path="/candy-corp" element={<CandyCorp />}/>
        <Route path="/theSweetSuite" element={<TheSweetSuite />}/>
        <Route path="/dentists-hate-us" element={<DentistsHateUs />}/>
        <Route path="/shoppingCart" element={<ShoppingCart />}/>
      </Routes> 
    </>

  );
}

export default Challenge
