import CheckOut from "./components/CheckOut";
import FoodItems from "./components/FoodItems";
import Sidebar from "./components/Sidebar";
import foods from './db/items'
import "./App.css";
import { useState } from "react";
function App() {
  const { products } = foods;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="fooditems">
        <FoodItems products={products} onAdd={onAdd} />
      </div>
      <div className="checkout">
        <CheckOut cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;
