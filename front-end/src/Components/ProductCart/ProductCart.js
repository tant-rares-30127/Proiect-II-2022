import React from "react";
import CartBody from "./CartBody";

export default function ProductCart() {
  return (
    <div className="Cart-container">
      <div className="Cart-header-container">
        <div className="Cart-header">
          <h2>Your bin</h2>
          <h2 className="Cart-products-number">{3} products</h2>
        </div>
        <hr></hr>
      </div>
      <CartBody />
      <button>Send the order</button>
    </div>
  );
}
