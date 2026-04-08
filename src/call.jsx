import { useCallback, useState } from "react";
import Head from "./head";

function Call() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);

  return (
    <>
      <Head newfn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Add Count</button>
    </>
  );
}
export default Call;
