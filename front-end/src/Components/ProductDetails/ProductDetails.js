import React from "react";
import Product from "./Product";
import DetailsTab from "./DetailsTab";

export default function ProductDetails() {
  return (
    <div className="Product-details-body-container">
      <div className="Product-details-title-container">
        <h2>Product Details</h2>
      </div>
      <Product />
      <DetailsTab />
    </div>
  );
}
