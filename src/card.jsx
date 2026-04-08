import "./card.css";
import Pic from "./assets/react.svg";
function Card() {
  return (
    <>
      <div className="card">
        <img className="img-card" src={Pic} alt="picture"></img>
        <h2 className="card-title">My new Website</h2>
        <p className="card-desc">This is a website based on reactJs </p>
      </div>
    </>
  );
}
export default Card;
