
import LowInventory from "./Pages/lowInventory"
import ItemRow from "./Pages/ItemRow"
import CandyCorp from "./Pages/CandyCorp"
import TheSweetSuite from "./Pages/TheSweetSuite"
import DentistsHateUs from "./Pages/DentistsHateUs"
import { Routes, Route, useNavigate } from "react-router-dom"
import ShoppingCart from "./Pages/ShoppingCart"

const Challenge = () => {

  const navigate = useNavigate();

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
          
        </tbody>
      </table>
      
      <div>Total Cost: </div>
    
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/low-inventory")}>Get Low-Stock Items</button>
      <button onClick={() => navigate("/candy-corp")}>Candy Corp</button>
      <button onClick={() => navigate("/theSweetSuite")}>the sweet suite</button>
      <button onClick={() => navigate("dentists-hate-us")}>Dentists Hate Us</button>
      <button onClick={() => navigate("shoppingCart")}>Shopping Cart</button>
      <Routes>
        <Route path="/" element={<ItemRow />}/>
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
