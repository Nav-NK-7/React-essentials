function Click() {
  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} u clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };
  return (
    <>
      <button onClick={() => handleClick("Bro")}>Click me</button>
    </>
  );
}
export default Click;
