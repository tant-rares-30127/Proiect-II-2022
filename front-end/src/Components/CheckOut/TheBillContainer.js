import React, { useState } from "react";
import GenderType from "./GenderType";
import "./Styles/ClientType.css";
//import TheBill from "./TheBillIndex";
//import submitted from "./CheckoutContainer";
export default function TheBillContainer() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });
  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  return (
    <div className="theBill">
      <div>1. The Bill</div>
      <div>
        <GenderType></GenderType>
      </div>
      <div>
        <span>First Name </span>
        <span>
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            type="text"
            name="firstName"
          ></input>
        </span>
      </div>
      <div>
        <span>Last Name </span>
        <span>
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            type="text"
            name="lastName"
          ></input>
        </span>
      </div>
    </div>
  );
}
