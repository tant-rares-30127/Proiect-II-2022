import React, { useState, useEffect } from "react";
import axios from "axios";
import Recomandation_products from "./Recomandation_Products";
import Recomandation from "./RecomandationIndex";

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
        console.log(data);
        setRecomandationData(data)
      });
  }, []);

  let productData = recomandationData.map((item) => (
    <Recomandation.Column key={item.id}>
      <Recomandation.Card>
        <div className="card_img">
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
          <Recomandation.Button>
            <div>Buy now</div>
          </Recomandation.Button>
        </Recomandation.Card_body>
      </Recomandation.Card>
    </Recomandation.Column>
  ));
  return <>{productData}</>;
}
