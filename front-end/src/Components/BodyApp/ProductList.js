import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import h2ProductsIcon from "../../Images/List.png";
import { useNavigate } from "react-router-dom";

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
          let name = null;
          if (newProducts.indexOf(p) === newProducts.length - 1) {
            name = "Lastlink";
          }

          return (
            <a
              id={name}
              key={uuidv4()}
              href="../../productsPage"
              onClick={() => {
                localStorage.setItem("productType", p.name);
              }}
            >
              <li key={uuidv4()}>
                <img
                  className="Product-Icon"
                  src={p.imageAdress}
                  alt="Icon"
                ></img>
                <span>{p.name}</span>
              </li>
            </a>
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
      <hr></hr>
      <ul>{products}</ul>
    </div>
  );
}
