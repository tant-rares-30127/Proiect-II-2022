import React, { useState } from "react";
import Cities from "./Cities";
import "./Styles/ClientType.css";

export default function TheOrderLocation(props) {
  const [values, setValues] = useState({
    adress: "",
    postalCode: "",
  });
  const handleAdressInputChange = (event) => {
    setValues({ ...values, adress: event.target.value }, true);
    props.updateData({ adress: event.target.value });
  };
  const handlePostalCodeInputChange = (event) => {
    setValues({ ...values, postalCode: event.target.value });
    props.updateData({ postalCode: event.target.value }, true);
  };
  return (
    <>
      <div className="theBill">
        2. The Order Location
        <Cities updateData={props.updateData}></Cities>
        <div>
          <span>Adress </span>
          <span className="adress">
            <input
              className="inputText"
              onChange={handleAdressInputChange}
              value={values.adress}
              type="text"
              name="adress"
              placeholder="Adress"
            ></input>
          </span>
        </div>
        <div>
          <span>Postal Code </span>
          <span>
            <input
              className="inputText"
              onChange={handlePostalCodeInputChange}
              value={values.postalCode}
              type="text"
              name="podtalCode"
              placeholder="Postal code"
            ></input>
          </span>
        </div>
      </div>
    </>
  );
}
