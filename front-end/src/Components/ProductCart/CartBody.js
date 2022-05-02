import React, { useState } from "react";
import CartProduct from "./CartProduct";

export default function CartBody({data}) {
  const [products, setProducts] = useState(data);   
  const productsToDisplay = products.map(p => {
      return (
          <CartProduct key={p.id} data={p}/>
      )
  })

  return (
    <div>
      <div className="Cart-details-bar">
        <div className="Bar-item">Product</div>
        <div className="Amount-price-container">
          <div className="Bar-item">Amount</div>
          <div className="Bar-item">Price</div>
        </div>
      </div>
      {productsToDisplay}
      <div className="Total-price-bar">
        <div>Total price:</div>
        <div>{8.067} Lei</div>
      </div>
    </div>
  );
}

