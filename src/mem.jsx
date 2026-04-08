import { useMemo, useState } from "react";

function Mems() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  function CubeNum(num) {
    console.log("Calculation Done");
    
    return Math.pow(num, 3);
  }
  const result = useMemo(() => CubeNum(number), [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <h1>Cube Result:{result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Count++</button>
      <h1>Counter :{counter}</h1>
    </>
  );
}
export default Mems;
