import React, { useContext } from "react";
import { ProductCartContext } from "./ProductCart";

export default function CartProduct({ data }) {
  const {handleAmountVariation, handleRemoveProduct} = useContext(ProductCartContext)
  const product = {quantity: data.quantity, ...data.product}
  return (
    <div className="ProductCart-container Sexy-border">
      <div className="ProductCart-image-details-container">
        <img src={product.imageAdress} alt="prod-img"></img>
        <div className="ProductCart-details-container">
          <div className="ProductCart-title">{product.name}</div>
          <div className="ProductCart-description">{product.description}</div>
          <div className="ProductCart-price">{product.price} Lei</div>
        </div>
      </div>
      <div className="ProductCart-amount-price-container">
        <div className="Amount-controller-container">
          <div className="Amount-controller">
            <button onClick={() => handleAmountVariation(-1, data)} className="Red-btn Amount-btn">-</button>
            <div className="Amount-value-container">{product.quantity}</div>
            <button onClick={() => handleAmountVariation(1, data)} className="Green-btn Amount-btn">+</button>
          </div>
          <button onClick={() => handleRemoveProduct(data)} className="Remove-btn">Remove</button>
        </div>
        <div className="ProductCart-price-container">
          <div className="Price-value-container">{(product.price*product.quantity).toFixed(2)} Lei</div>
        </div>
      </div>
    </div>
  );
}
