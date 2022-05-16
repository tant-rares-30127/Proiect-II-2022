import React from "react";
import ProductsDropDown from "./ProductsDropDown";
import AccountDropDown from "./AccountDropDown";

export default function DropDown({ products, optionName }) {

  return (
    <div className="DropDown-container">
      {optionName === "My Products" ? <ProductsDropDown products={products}/> : null}
      {optionName === "Account" ? <AccountDropDown/> : null}
    </div>
  );
}
