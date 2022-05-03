import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Products from "./Products";
import "./Styles/ProductsPage.css";

export default function ProductsPage() {
  const [selected, setIsSelected] = useState("");
  return (
    <div className="products_container">
      <div className="dropdown_filters">
        <div className="name">Options</div>
        <Dropdown selected={selected} setIsSelected={setIsSelected} />
        <Dropdown selected={selected} setIsSelected={setIsSelected} />
      </div>
      <div className="list_products">
        <div className="title">
          <div className="name">Phones</div>
          <div className="results">(134 results)</div>
        </div>
        <Products></Products>
      </div>
    </div>
  );
}
