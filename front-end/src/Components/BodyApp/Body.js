import React from "react";
import ProductList from "./ProductList";
import promoImage from "../../Images/Happy_customer_online_shopping.png";

export default function Body({ products }) {
  return (
    <div>
      <div className="Main-body-container">
        <ProductList products={products} />
        <img
            className="Promo-Image" 
            src={promoImage} alt="Promo"></img>
      </div>
    </div>
  );
}
