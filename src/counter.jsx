import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount((c) => c + 1);
  };
  const Decrement = () => {
    setCount((c) => c - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}
export default Counter;
