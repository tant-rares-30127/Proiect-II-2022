import React from "react";
import Recomandation_products from "./Recomandation_Products";
import Recomandation from "./RecomandationIndex";

export default function List() {
  let productData = Recomandation_products.map((item) => (
    <Recomandation.Column key={item.id}>
      <Recomandation.Card>
        <div className="card_img">
          <img id="object-position" src={item.thumb}></img>
        </div>
        <Recomandation.Card_body>
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <Recomandation.Price_section>
            <div>
              <h1>{item.price} lei</h1>
            </div>
            <div>
              <h3>{item.abonament_price} lei</h3>
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
