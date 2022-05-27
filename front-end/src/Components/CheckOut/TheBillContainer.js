import React, { useState } from "react";
import "./Styles/ClientType.css";
//import TheBill from "./TheBillIndex";
//import submitted from "./CheckoutContainer";
export default function TheBillContainer(props) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    errors: {},
  });

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
    //let value = true;
    //if (!validate()) value = false;
    props.updateData({ firstName: event.target.value }, true);
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
    //validate();
    props.updateData({ lastName: event.target.value }, true);
  };

  function validate() {
    let firstName = values.firstName;
    let lastName = values.lastName;
    let error = {};
    let isValid = true;

    if (!firstName) {
      isValid = false;
      error["firstName"] = "Please enter your name.";
    }

    if (typeof firstName !== "undefined") {
      if (!firstName.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        error["firstName"] = "Please enter valid name";
      }
    }
    if (!lastName) {
      isValid = false;
      error["lastName"] = "Please enter your name.";
    }

    if (typeof lastName !== "undefined") {
      if (!lastName.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        error["lastName"] = "Please enter valid name";
      }
    }
    setValues({ ...values, errors: error });
    return isValid;
  }

  return (
    <div className="theBill">
      <div>1. The Bill</div>
      <div>
        <span>First Name </span>
        <span className="spacebetween">
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
          ></input>
          <div className="text-danger">{values.errors.firstName}</div>
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
            placeholder="Last Name"
          ></input>
          <div className="text-danger">{values.errors.lastName}</div>
        </span>
      </div>
    </div>
  );
}
