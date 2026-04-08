import { useEffect, useState } from "react";

function Render() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 2000);
  }, [count]);
  return (
    <>
      <p>I have rendered {count} times</p>
    </>
  );
}
export default Render;
