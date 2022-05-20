import React from "react";
import TheBillContainer from "./TheBillContainer";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
import ThePayment from "./ThePayment";
import OtherInformation from "./OtherInformation";
import { useState } from "react";

export default function CheckoutContainer() {
  const [name, setName] = useState("");
  const [h1_Text, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handle_change(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  return (
    <div className="checkoutContainer">
      <>
        <TheBillContainer></TheBillContainer>
        <div> .</div>
        <TheOrderLocation></TheOrderLocation>
        <div> .</div>
        <ThePayment></ThePayment>
        <div> .</div>
        <OtherInformation></OtherInformation>
        <button
          style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
        >
          submit
        </button>
      </>
    </div>
  );
}
