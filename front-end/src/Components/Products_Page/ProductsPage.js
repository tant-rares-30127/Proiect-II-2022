import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Products from "./Products";
import "./Styles/ProductsPage.css";
import axios from "axios";
//dummy

export default function ProductsPage() {
  const [selected, setIsSelected] = useState("");

  const [selectedProducts, setIsSelectedProducts] = useState();

  useEffect(() => {
    let productType = localStorage.getItem("productType");
    console.log(productType);
    axios
      .get(
        "https://localhost:5001/ProductTypes/ProductsForProductType?text=" +
          productType
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        console.log(data);
        setIsSelectedProducts(data);
      });
  }, []);

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
        <Products selectedProducts={selectedProducts}></Products>
      </div>
    </div>
  );
}
