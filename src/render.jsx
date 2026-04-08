import { useRef } from "react";

function Rerender() {
  const inputEl = useRef();
  const btnClick = () => {
    console.log(inputEl.current);
    inputEl.current.style.background = "blue";
  };

  return (
    <>
      <input type="text" ref={inputEl}></input>
      <button onClick={btnClick}>+1</button>
    </>
  );
}

export default Rerender;
