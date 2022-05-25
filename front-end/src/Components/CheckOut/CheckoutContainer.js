import React, { Children, useRef } from "react";
import TheBillContainer from "./TheBillContainer";
import "./Styles/ClientType.css";
import TheOrderLocation from "./TheOrderLocation";
import ThePayment from "./ThePayment";
import OtherInformation from "./OtherInformation";
import { useState } from "react";
import axios from "axios";

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
  const [corectData, setCorectData] = useState(false);
  //const email = "Enter e-mail";

  function updateData(newData, isCorect) {
    console.log({ ...data, ...newData } + isCorect);
    setData({ ...data, ...newData });
    setCorectData(isCorect);
  }

  const formSubmit = (event) => {
    if (!corectData === true) {
      event.preventDefault();
      console.log("fals");
    } else if (
      !data.firstName ||
      !data.city ||
      !data.place ||
      !data.adress ||
      !data.postalCode ||
      !data.adress ||
      !data.email
    ) {
      event.preventDefault();
      alert("Complete corect all the fils");
    } else {
      axios({
        method: "post",
        url: "https://localhost:5001/OrderHistories/AddOrder",
        headers: {},
        data: {
          id: 1,
          FirstName: "Rares",
          LastName: "Tant",
          Email: "tantrares@yahoo.com",
          Phone: "0753485033",
          City: "Sighisoara",
          County: "Mures",
          Address: "Strada Romana 117",
          PostalCode: "545400",
          PaymentMethod: "GPay",
          DateTime: null,
          ShoppingCart: null,
        },
      })
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
        });
    }
  };

  const [isMousedOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  //const handleSubmit = (event) => {
  // this.child.handleSubmit(event);
  // };

  return (
    <div className="checkoutContainer">
      <form onSubmit={formSubmit}>
        <TheBillContainer updateData={updateData}></TheBillContainer>
        <div> .</div>
        <TheOrderLocation updateData={updateData}></TheOrderLocation>
        <div> .</div>
        <ThePayment updateData={updateData}></ThePayment>
        <div> .</div>
        <OtherInformation updateData={updateData}></OtherInformation>
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
}
