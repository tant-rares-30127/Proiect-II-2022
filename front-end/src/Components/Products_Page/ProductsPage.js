import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Products from "./Products";
import "./Styles/ProductsPage.css";
import axios from "axios";

export default function ProductsPage() {
  const [selected, setIsSelected] = useState("");
  const [selectedProducts, setIsSelectedProducts] = useState();
  const [sortingOptions, setSortingOptions] = useState({
    order: "ascending",
    orderType: "price",
  });

  useEffect(() => {
    let productType = JSON.parse(localStorage.getItem("productType")).name;
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

  function handleSort(newOptions) {
    const options = { ...sortingOptions, ...newOptions };
    let productType = JSON.parse(localStorage.getItem("productType")).id;
    console.log(options);
    console.log(
      "https://localhost:5001/Products/SortProducts?order=" +
        options.order +
        "&orderType=" +
        options.orderType +
        "&productTypeId=" +
        productType
    );
    axios
      .get(
        "https://localhost:5001/Products/SortProducts?order=" +
          options.order +
          "&orderType=" +
          options.orderType +
          "&productTypeId=" +
          productType
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setIsSelectedProducts(data);
        setSortingOptions(options);
      })
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
  }

  return (
    <div className="products_container">
      <div className="dropdown_filters">
        <div className="name">Product Type</div>
        <Dropdown
          handleSort={handleSort}
          selected={selected}
          setIsSelected={setIsSelected}
        />
        <Dropdown2
          handleSort={handleSort}
          selected={selected}
          setIsSelected={setIsSelected}
        />
      </div>
      <div className="list_products">
        <Products selectedProducts={selectedProducts}></Products>
      </div>
    </div>
  );
}
