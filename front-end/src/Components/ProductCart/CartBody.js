import React from "react";
import CartProduct from "./CartProduct";

export default function CartBody() {
  return (
    <div>
      <div className="Cart-details-bar">
        <div className="Bar-item">Product</div>
        <div className="Amount-price-container">
          <div className="Bar-item">Amount</div>
          <div className="Bar-item">Price</div>
        </div>
      </div>

      <div className="Total-price-bar">
        <div>Total price:</div>
        <div>{8.067} Lei</div>
      </div>
    </div>
  );
}

const productsData = [
  {
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
  },
  {
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
  },
  {
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
  },
];
