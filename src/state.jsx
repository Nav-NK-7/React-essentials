import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    year: new Date().getFullYear(),
    make: "Chevrolet",
    model: "Mustang",
    color: "red",
  });
  const changeColor = () => {
    setCar((c) => {
      return { ...c, color: "blue" };
    });
  };
  return (
    <div>
      <p>
        The Car is {car.make} {car.model} {car.year} which is {car.color} colour
      </p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Car;
