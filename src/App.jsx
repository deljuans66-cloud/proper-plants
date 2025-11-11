import { useState } from "react";
import { PLANTS } from "./plants/data";
import PlantList from "./Plants/PlantList";
import Cart from "./CART/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plant) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app">
      <h1>Plant Shop</h1>
      <div className="content">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}
