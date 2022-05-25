import React from "react";
import TheBillContainer from "./TheBillContainer";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
import ThePayment from "./ThePayment";
import OtherInformation from "./OtherInformation";
import { useState } from "react";

export default function CheckoutContainer() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    place: "",
    adress: "",
    postalCode: "",
    typePay: "",
    email: "",
    phone: "",
  });

  function updateData(newData) {
    console.log({ ...data, ...newData });
    setData({ ...data, ...newData });
  }

  return (
    <div className="checkoutContainer">
      <form>
        <TheBillContainer updateData={updateData}></TheBillContainer>
        <div> .</div>
        <TheOrderLocation updateData={updateData}></TheOrderLocation>
        <div> .</div>
        <ThePayment updateData={updateData}></ThePayment>
        <div> .</div>
        <OtherInformation updateData={updateData}></OtherInformation>
        <button>submit</button>
      </form>
    </div>
  );
}
