import React from "react";
import CartBody from "./CartBody";
import { v4 as uuidv4 } from "uuid";
import img1 from "../../Images/products/telefon_mobil.png";
import img2 from "../../Images/products/telefon_mobil_apple.png";
import img3 from "../../Images/products/telefon_mobil_samsung.png";

export default function ProductCart() {


  return (
    <div className="Cart-container">
      <div className="Cart-header-container">
        <div className="Cart-header">
          <h2>Your bin</h2>
          <h2 className="Cart-products-number">{productsData.length} products</h2>
        </div>
        <hr></hr>
      </div>
      <CartBody data={productsData}/>
      <button className="Send-order-btn">Send the order</button>
    </div>
  );
}

const productsData = [
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img1,
  },
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img2,
  },
  {
    id: uuidv4(),
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img3,
  },
];
