import React from "react";
import Phones_products from "./Phones_Products";
import "./Styles/Products.css";

export default function Phone_List() {
  let productData = Phones_products.map((item) => (
    <div className="Card">
      <div className="card_img">
        <img id="object-position" src={item.thumb}></img>
      </div>
      <div className=" Card_body">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <div className="Price_section">
          <div className="Price">
            <h1>{item.price} lei</h1>
          </div>
          <div>
            <h3>{item.abonament_price} lei</h3>
          </div>
        </div>
        <div className="Button">
          <div>Buy now</div>
        </div>
      </div>
    </div>
  ));
  return <>{productData}</>;
}