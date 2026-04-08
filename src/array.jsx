import { useState } from "react";

function Foods() {
  const [foods, setFoods] = useState(["apple", "banana", "orange"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1>Your Food Items</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food"></input>
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}
export default Foods;
