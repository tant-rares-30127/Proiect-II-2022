import React from "react";
import PaymentType from "./PaymentType";
import "./Styles/ClientType.css";

export default function ThePayment() {
  return (
    <div className="theBill">
      <div>3. ThePayment</div>
      <div>
        <PaymentType></PaymentType>
      </div>
    </div>
  );
}
