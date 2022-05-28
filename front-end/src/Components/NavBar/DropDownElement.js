import React from "react";

export default function DropDownElement({ product }) {
  function handleRedirectToProductDetails(productName) {
    localStorage.setItem("productName", productName);
  }

  return (
    <a href="/productDetails"
      onClick={() => handleRedirectToProductDetails(product.name)}
      className="DropDownElement-container Sexy-border"
    >
      <img className="DropDown-image" src={product.imageAdress} />
      <div className="DropDownElement-product-details-container">
        <div className="DropDownElement-product-description DropDownElement-font-size">
          {product.name}
        </div>
        <div className="DropDownElement-font-size">{product.price} Lei</div>
      </div>
      <div className="DropDownElement-font-size">(x{product.amount})</div>
    </a>
  );
}
