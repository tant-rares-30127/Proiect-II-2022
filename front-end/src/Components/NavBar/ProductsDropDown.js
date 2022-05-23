import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DropDownElement from "./DropDownElement";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../App";

export default function ProductsDropDown() {
  const [products, setProducts] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === undefined || user === null) return;
    axios({
      method: "post",
      url: "https://localhost:5001/ShoppingCarts/ProductsCart",
      headers: {},
      data: user,
    })
      .then((response) => response.data)
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
  }, [user]);

  let dropDownElements = null;

  if (products !== null && products !== undefined) {
    console.log(products)
    dropDownElements = products.map((p) => {
      return (
        <DropDownElement
          key={uuidv4()}
          product={{ amount: p.quantity, ...p.product }}
        />
      );
    });
  }

  return (
    <>
      <div className="DropDown-title-container">
        <h2>Your cart</h2>
      </div>
      {dropDownElements === null ? <div>Your cart is empty!</div> : dropDownElements}
      <div className="DropwDown-link-container">
        <a href="/productCart" className="Page-link">
          Go to your cart
        </a>
      </div>
    </>
  );
}
