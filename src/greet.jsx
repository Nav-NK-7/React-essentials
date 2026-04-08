function Greet(props) {
  return props.isLoggedIn ? (
    <h1>Welcome {props.name}</h1>
  ) : (
    <h1>Please Login</h1>
  );
}
export default Greet;
