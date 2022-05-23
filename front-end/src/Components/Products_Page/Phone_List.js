import React from "react";
import Phones_products from "./Phones_Products";
import "./Styles/Products.css";
import { useNavigate } from "react-router-dom";

export default function Phone_List({ selectedProducts }) {
  const navigate = useNavigate();
  console.log(selectedProducts);
  const handleProduct = (product_name) => {
    localStorage.setItem("productName", product_name);
    let path = "/productDetails";
    navigate(path);
  };

  let productData = null;

  if (selectedProducts !== undefined) {
    productData = selectedProducts.map((item) => (
      <div onClick={() => handleProduct(item.name)} className="Card">
        <div className="card_img">
          <img id="object-position" src={item.imageAdress}></img>
        </div>
        <div className=" Card_body">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div className="Price_section">
            <div className="Price">
              <h1>{item.price} lei</h1>
            </div>
            <div>
              <h3>{item.price} lei</h3>
            </div>
          </div>
          <div className="Button">
            <div>Buy now</div>
          </div>
        </div>
      </div>
    ));
  }

  return <>{productData}</>;
}
