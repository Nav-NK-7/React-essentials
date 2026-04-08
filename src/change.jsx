import React, { useState } from "react";
function Change() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} type="name"></input>
      <h1>Name:{name}</h1>
      <input value={age} onChange={handleAgeChange} type="number"></input>
      <h1>Age:{age}</h1>
      <textarea value={comment} onChange={handleCommentChange}></textarea>
      <h1>Comment:{comment}</h1>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
      </select>
      <h1>Payment:{payment}</h1>
      <label>
        <input
          value="Pick up"
          type="radio"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        ></input>
        Pick Up
      </label>
      <label>
        <input
          value="delivery"
          type="radio"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        ></input>
        Delivery
      </label>
      <h1>Shipping:{shipping}</h1>
    </>
  );
}
export default Change;
