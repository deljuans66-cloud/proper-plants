import "./plants.css";
import PlantCard from "../plants/PlantCard";

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      <h2>Available Plants</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
