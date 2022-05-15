import React from "react";
import DropDownElement from "./DropDownElement";
import { v4 as uuidv4 } from "uuid";

export default function ProductsDropDown({ products }) {
  const dropDownElements = products.map((p) => {
          return <DropDownElement key={uuidv4()} product={p} />;
        })

  return (
    <>
      <div className="DropDown-title-container">
        <h2>Your cart</h2>
      </div>
      {dropDownElements}
      <div className="DropwDown-link-container">
        <a href="/productCart" className="Page-link">Go to your cart</a>
      </div>
    </>
  );
}
