
import LowInventory from "./Pages/lowInventory"
import ItemRow from "./Pages/ItemRow"
import CandyCorp from "./Pages/CandyCorp"
import TheSweetSuite from "./Pages/TheSweetSuite"
import DentistsHateUs from "./Pages/DentistsHateUs"
import { Routes, Route, useNavigate } from "react-router-dom"
import ShoppingCart from "./Pages/ShoppingCart"
import Button from 'react-bootstrap/Button'

const Challenge = () => {

  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 20 }}>
   
      
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/")}>Home</Button>
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/low-inventory")}>Get Low-Stock Items</Button>
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/candy-corp")}>Candy Corp</Button>
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("/theSweetSuite")}>the sweet suite</Button>
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("dentists-hate-us")}>Dentists Hate Us</Button>
      <Button variant="info" style={{ margin: 2 }} onClick={() => navigate("shoppingCart")}>Shopping Cart</Button>
      <Routes>
        <Route path="/" element={<ItemRow />}/>
        <Route path="/low-inventory" element={<LowInventory />}/>
        <Route path="/candy-corp" element={<CandyCorp />}/>
        <Route path="/theSweetSuite" element={<TheSweetSuite />}/>
        <Route path="/dentists-hate-us" element={<DentistsHateUs />}/>
        <Route path="/shoppingCart" element={<ShoppingCart />}/>
      </Routes> 
    </div>

  );
}

export default Challenge
