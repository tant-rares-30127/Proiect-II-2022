import React from "react";
import CartProduct from "./CartProduct";
import img1 from "../../Images/products/telefon_mobil.png"
import img2 from "../../Images/products/telefon_mobil_apple.png"
import img3 from "../../Images/products/telefon_mobil_samsung.png"

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
        <CartProduct data={productsData[0]}/>
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
    image: img1
  },
  {
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img2
  },
  {
    name: "Telefon mobul Apple",
    description: "iPhone 11, 64 GB, Black",
    price: 2.689,
    amount: 1,
    image: img3
  },
];
