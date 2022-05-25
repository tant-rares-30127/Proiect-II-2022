import React from "react";
import PaymentType from "./PaymentType";
import "./Styles/ClientType.css";

export default function ThePayment(props) {
  return (
    <div className="theBill">
      <div>3. ThePayment</div>
      <div>
        <PaymentType updateData={props.updateData}></PaymentType>
      </div>
    </div>
  );
}
