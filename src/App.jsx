import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ListComponent = () => {};

const ListItemComponent = (props) => {
  return (
    <div className="list-item-component">
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <input type="checkbox" name="" id="" />
    </div>
  );
};

const AddItemComponent = ({ onAdd }) => {
  const  [itemPrice, setItemPrice ] = useState(0);
  const  [itemName, setItemName]  = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleAddItem = () => {
    onAdd({ name: itemName, price: itemPrice });
    setItemName("");
    setItemPrice(0);
  };
  return (
    <div>
      <input
        type="text"
        name="item-name"
        id="input-name"
        value={itemName}
        onChange={handleNameChange}
        placeholder="Item Name"
      />
      <input
        type="text"
        id="input-price"
        value={itemPrice}
        onChange={handlePriceChange}
        placeholder="Item Price"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <div>Shopping List</div>
      {/* Pass handleAddItem function to props as onAdd */}
      <AddItemComponent onAdd={handleAddItem} /> 
      {items.map((item, index) => (
        <ListItemComponent key={index} name={item.name} price={item.price} />
      ))}
    </>
  );
}

export default App;
