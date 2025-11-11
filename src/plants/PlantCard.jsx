import "./plants.css";

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <span className="emoji">{plant.image}</span>
      <span className="name">{plant.name}</span>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
