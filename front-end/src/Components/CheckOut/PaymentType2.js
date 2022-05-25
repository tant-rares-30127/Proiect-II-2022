import React, { useState } from "react";
import "./Styles/ClientType.css";
import Apple from "../../Images/Pay/ApplePay.png";
import Google from "../../Images/Pay/Google Pay.png";
import PayPal from "../../Images/Pay/PayPal.png";
import Discover from "../../Images/Pay/Discover.png";
import Maestro from "../../Images/Pay/Maestro.png";
import MaestroCard from "../../Images/Pay/MasterCard.png";
import Visa from "../../Images/Pay/Visa.png";

export default function PaymentType(props) {
  const [paymentData, setPaymentData] = useState();

  const onValueChange = (event) => {
    setPaymentData(event.target.value);
    this.props.updateData({ typePay: event.target.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedOption);
  };

  return (
    <div className="demo3">
      <form onSubmit={formSubmit}>
        <div className="radio2">
          <input
            type="radio"
            value="option1"
            checked={paymentData === "option1"}
            onChange={onValueChange}
          />
          <span className="imagePay">
            <div>By Payment Systems</div>
            <span>
              <img src={Apple} />
              <img src={Google} />
              <img src={PayPal} />
            </span>
          </span>
        </div>
        <div className="radio2">
          <input
            type="radio"
            value="option2"
            checked={paymentData === "option2"}
            onChange={onValueChange}
          />
          <span className="imagePay">
            <div>By Payment Systems</div>
            <span>
              <img src={MaestroCard} />
              <img src={Maestro} />
              <img src={Visa} />
              <img src={Discover} />
            </span>
          </span>
        </div>
        <div className="radio2">
          <input
            type="radio"
            value="option3"
            checked={paymentData === "option3"}
            onChange={onValueChange}
          />
          <span className="imagePay">Reimbursment</span>
        </div>
      </form>
    </div>
  );
}
