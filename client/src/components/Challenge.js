
import ItemRow from "../components/ItemRow"

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
        <tbody id="tbody">
          {/* 
          
          TODO: Create an <ItemRow /> component that's rendered for every inventory item. The component
          will need an input element in the Order Amount column that will take in the order amount and 
          update the application state appropriately.
          */}
        
        </tbody>
      </table>
      {/* TODO: Display total cost returned from the server */}
      <div>Total Cost: </div>
      {/* 
      TODO: Add event handlers to these buttons that use the Java API to perform their relative actions.
      */}
        <ItemRow />
      <button onClick={() => {
        const tbody = document.getElementById("tbody")
        tbody.append("testing the append")
      }}>Get Low-Stock Items</button>
      <button onClick={() => alert("more testing")}>Determine Re-Order Cost</button>
    </>
  );
}

export default Challenge
