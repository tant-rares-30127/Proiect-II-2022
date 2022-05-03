import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Products from "./Products";
import "./Styles/ProductsPage.css";

export default function ProductsPage() {
  const [selected, setIsSelected] = useState("");
  return (
    <div className="products_container">
      <div className="dropdown_filters">
        <Dropdown selected={selected} setIsSelected={setIsSelected} />
        <Dropdown selected={selected} setIsSelected={setIsSelected} />
      </div>
      <div className="list_products">
        <Products></Products>
      </div>
    </div>
  );
}
