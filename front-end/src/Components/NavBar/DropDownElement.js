import React from "react";
import image from "../../Images/products/telefon_mobil.png";

export default function DropDownElement({ product }) {
  return (
    <div className="DropDownElement-container">
      <img className="DropDown-image" src={image} />
      <div className="DropDownElement-product-details-container">
        <div className="DropDownElement-product-description DropDownElement-font-size">
          {product.name}
        </div>
        <div className="DropDownElement-font-size">
          {product.price} Lei
        </div>
      </div>
      <div className="DropDownElement-font-size">(x{product.amount})</div>
    </div>
  );
}
