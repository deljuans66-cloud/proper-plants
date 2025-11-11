import "./cart.css";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <span className="emoji">{item.image}</span>
      <span className="name">{item.name}</span>

      <div className="quantity-controls">
        <button onClick={() => removeFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  );
}
