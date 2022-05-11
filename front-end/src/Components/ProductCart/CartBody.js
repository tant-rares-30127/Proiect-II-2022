import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";

export default function CartBody({ data }) {
  const [products, setProducts] = useState([]);   

  const productsToDisplay = products.map(p => {
      return (
          <CartProduct key={p.id} data={p}/>
      )
  })

  const finalPrice = getFinalPrice()

  function getFinalPrice() {
    let totalPrice = 0;
    products.map((p) => {
      totalPrice += p.price * p.amount
    })
    return totalPrice
  }

  useEffect(() => {
    setProducts(data)
  }, [data])

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
      <div className="Total-price-bar Sexy-border">
        <div>Total price:</div>
        <div className="Final-price-value">{finalPrice} Lei</div>
      </div>
    </div>
  );
}

