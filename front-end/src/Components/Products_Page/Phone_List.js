import React from "react";
import Phones_products from "./Phones_Products";
import "./Styles/Products.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Phone_List({ selectedProducts }) {
  const navigate = useNavigate();
  console.log(selectedProducts);
  const handleProduct = (product_name) => {
    localStorage.setItem("productName", product_name);
    let path = "/productDetails";
    navigate(path);
  };

  function handleButNowBtnClick(productId) {
    // TODO: api call to add product to cart
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null || user === undefined) {
      navigate("/login");
    }
    axios({
      method: "post",
      url:
        "https://localhost:5001/ShoppingCarts/AddProductToCart?id=" + productId,
      data: user,
    })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
  }

  let productData = null;

  if (selectedProducts !== undefined) {
    productData = selectedProducts.map((item) => (
      <div className="Card">
        <div className="card_img">
          <img
            onClick={() => handleProduct(item.name)}
            id="object-position"
            src={item.imageAdress}
          ></img>
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
          <div onClick={() => handleButNowBtnClick(item.id)} className="Button">
            <div>Buy now</div>
          </div>
        </div>
      </div>
    ));
  }

  return <>{productData}</>;
}
