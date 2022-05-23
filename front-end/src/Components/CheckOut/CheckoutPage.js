import React from "react";
import CheckoutContainer from "./CheckoutContainer";
import ClientType from "./ClientType";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
//dummy
export default function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <ClientType></ClientType>
      <div className="line">.</div>
      <CheckoutContainer></CheckoutContainer>
    </div>
  );
}
