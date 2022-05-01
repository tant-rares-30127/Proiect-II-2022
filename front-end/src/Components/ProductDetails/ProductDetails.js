import React from "react";
import Product from "./Product";
import DetailsTab from "./DetailsTab";

export default function ProductDetails() {
  return (
    <div>
      <div className="White-space"></div>
      <div className="Product-details-title-container">
        <h2>Product Details</h2>
      </div>
      <Product />
      <DetailsTab />
    </div>
  );
}
