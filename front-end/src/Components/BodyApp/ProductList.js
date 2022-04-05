import React from "react";
import { v4 as uuidv4 } from "uuid";
import productIcon from "../../Images/Laptop.png";
import h2ProductsIcon from "../../Images/List.png";

export default function ProductList({ products }) {
  const productsToDisplay = products.map((p) => {
    return (
      <li key={uuidv4()}>
        <a href="../../dummy2">
            <img className="Product-Icon" src={productIcon} alt="Icon"></img>
            <span>
                {p}
            </span>
        </a>
      </li>
    );
  });

  return (
    <div className="Product-list-container">
      <span className="Product-title-container">
        <img
          className="Product-Menu-Icon"
          src={h2ProductsIcon}
          alt="Icon"
        ></img>
        <h2>Products</h2>
      </span>
      <ul>{productsToDisplay}</ul>
    </div>
  );
}
