import { useState } from "react";

function Cars() {
  const [car, setCar] = useState({
    year: 2025,
    make: "honda",
    model: "c12",
  });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <>
      <h1>
        Your car : {car.year} {car.make} {car.model}
      </h1>
      <input type="number" value={car.year} onChange={handleYearChange}></input>
      <input type="text" value={car.make} onChange={handleMakeChange}></input>
      <input type="text" value={car.model} onChange={handleModelChange}></input>
    </>
  );
}
export default Cars;
