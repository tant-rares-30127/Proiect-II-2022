import React, { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
export default function CheckoutPage() {
  const [clientType, setClientType] = useState("");
  const [checkoutContainer, setCheckoutContainer] = useState({});

  return (
    <div className="checkoutPage">
      <CheckoutContainer></CheckoutContainer>
    </div>
  );
}
