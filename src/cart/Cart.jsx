import CartItem from "./cart/CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart">
      <h2> Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
}
