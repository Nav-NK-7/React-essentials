import React from "react";
function Head() {
  console.log("Head rendered");
  return (
    <>
      <h1>Header</h1>
    </>
  );
}
export default React.memo(Head);
