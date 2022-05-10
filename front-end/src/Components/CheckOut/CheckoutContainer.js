import React from "react";
import TheBillContainer from "./TheBillContainer";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
import ThePayment from "./ThePayment";
import OtherInformation from "./OtherInformation";
import { useState } from "react";

export default function CheckoutContainer() {
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
        <button type="submit">submit</button>
      </>
    </div>
  );
}
