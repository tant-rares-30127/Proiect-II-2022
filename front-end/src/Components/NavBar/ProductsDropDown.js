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
        if (data.length == 0) {
          setProducts(null)
          return
        }
        setProducts(data);
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
  console.log(dropDownElements)

  return (
    <>
      <div className="DropDown-title-container">
        <h2>Your cart</h2>
      </div>
      {dropDownElements === null ? <h3 className="DropDown-header">Your cart is empty!</h3> : dropDownElements}
      <div className="DropwDown-link-container">
        <a href="/productCart" className="Page-link">
          Go to your cart
        </a>
      </div>
    </>
  );
}
