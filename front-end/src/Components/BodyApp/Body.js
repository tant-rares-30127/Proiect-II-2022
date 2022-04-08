import React from "react";
import ProductList from "./ProductList";
import ImageSlider from "./ImageSlider";

export default function Body({ products }) {
  return (
    <div className="Main-body-container">
      <div>
        <ProductList />
      </div>
        <ImageSlider />
    </div>
  );
}
