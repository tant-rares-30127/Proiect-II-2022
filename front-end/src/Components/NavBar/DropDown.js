import React from "react";
import DropDownElement from "./DropDownElement";
import { v4 as uuidv4 } from "uuid";

export default function DropDown({ products, optionName }) {
  const dropDownElements = products.map((p) => {
    return <DropDownElement key={uuidv4()} product={p} />;
  });

  return (
    <div className="DropDown-container">
      <div className="DropDown-title-container">
        <h2>Your products</h2>
      </div>
      {dropDownElements}
      <div className="DropwDown-link-container">
        <a className="Page-link">{"Go to " + optionName}</a>
      </div>
    </div>
  );
}
