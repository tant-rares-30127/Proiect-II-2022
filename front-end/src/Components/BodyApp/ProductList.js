import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import productIcon from "../../Images/Laptop.png";
import h2ProductsIcon from "../../Images/List.png";

export default function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    let newProducts = [];
    axios
      .get("https://localhost:5001/ProductTypes/ProductsType")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        newProducts = data;

        const productsToDisplay = newProducts.map((p) => {
          return (
            <li key={uuidv4()}>
              <a href="../../dummy2">
                <img
                  className="Product-Icon"
                  src={p.imageAdress}
                  alt="Icon"
                ></img>
                <span>{p.name}</span>
              </a>
            </li>
          );
        });

        setProducts(productsToDisplay);
      });
  }, []);

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
      <ul>{products}</ul>
    </div>
  );
}
