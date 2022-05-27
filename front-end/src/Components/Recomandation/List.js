import React, { useState, useEffect } from "react";
import axios from "axios";
import Recomandation from "./RecomandationIndex";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [recomandationData, setRecomandationData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/Products/RecommandatedProducts")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        setRecomandationData(data);
      });
  }, []);

  const navigate = useNavigate();
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

  let productData = recomandationData.map((item) => (
    <Recomandation.Column key={item.id}>
      <Recomandation.Card>
        <div className="card_img" onClick={() => handleProduct(item.name)}>
          <img id="object-position" src={item.imageAdress}></img>
        </div>
        <Recomandation.Card_body>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Recomandation.Price_section>
            <div>
              <h1>{item.price} lei</h1>
            </div>
          </Recomandation.Price_section>
          <Recomandation.Button onClick={() => handleButNowBtnClick(item.id)}>
            <div>Buy now</div>
          </Recomandation.Button>
        </Recomandation.Card_body>
      </Recomandation.Card>
    </Recomandation.Column>
  ));
  return <>{productData}</>;
}
