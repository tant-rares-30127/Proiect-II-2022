import React, { useState } from "react";
import "./Styles/ClientType.css";
export default function GenderType2() {
  const [genderData, setGenderData] = useState({
    selectedOption: "",
    errors: "",
  });

  const formSubmit = (e) => {
    const target = e.target;
    if (validate()) {
      setGenderData((previousState) => {
        return { ...previousState, selectedOption: target.value };
      });
    }
  };

  const onValueChange = (e) => {
    const target = e.target;
    setGenderData((previousState) => {
      return { ...previousState, selectedOption: target.value };
    });
  };

  function validate() {
    let isValid = true;
    if (
      genderData.selectedOption != "Mr." &&
      genderData.selectedOption != "Mrs."
    ) {
      setGenderData((previousState) => {
        return { ...previousState, errors: "Please select a gender" };
      });
      isValid = false;
    }

    return isValid;
  }

  return (
    <div className="demo2">
      <form onSubmit={formSubmit}>
        <span
          className="radio1"
          onClick={() => {
            setGenderData((previousState) => {
              return { ...previousState, selectedOption: "Mr." };
            });
          }}
        >
          <label>
            <input
              type="radio"
              value="Mr."
              checked={genderData.selectedOption === "Mr."}
              onChange={onValueChange}
            />
            Mr.
          </label>
        </span>

        <span
          className="radio1"
          onClick={() => {
            setGenderData((previousState) => {
              return { ...previousState, selectedOption: "Mrs." };
            });
          }}
        >
          <label>
            <input
              type="radio"
              value="Mrs."
              checked={genderData.selectedOption === "Mrs."}
              onChange={onValueChange}
            />
            Mrs.
          </label>
        </span>
        <div className="text-danger">{genderData.errors}</div>
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
}
