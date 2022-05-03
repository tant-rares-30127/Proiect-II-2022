import React, { useContext } from "react";
import { ProductCartContext } from "./ProductCart";

export default function CartProduct({ data }) {
  const {handleAmountVariation, handleRemoveProduct} = useContext(ProductCartContext)

  return (
    <div className="ProductCart-container">
      <div className="ProductCart-image-details-container">
        <img src={data.image} alt="prod-img"></img>
        <div className="ProductCart-details-container">
          <div className="ProductCart-title">{data.name}</div>
          <div>{data.description}</div>
          <div className="ProductCart-price">{data.price} Lei</div>
        </div>
      </div>
      <div className="ProductCart-amount-price-container">
        <div className="Amount-controller-container">
          <div className="Amount-controller">
            <button onClick={() => handleAmountVariation(data.id, -1)} className="Red-btn Amount-btn">-</button>
            <div className="Amount-value-container">{data.amount}</div>
            <button onClick={() => handleAmountVariation(data.id, 1)} className="Green-btn Amount-btn">+</button>
          </div>
          <button onClick={() => handleRemoveProduct(data.id)} className="Remove-btn">Remove</button>
        </div>
        <div className="ProductCart-price-container">
          <div className="Price-value-container">{data.price*data.amount} Lei</div>
        </div>
      </div>
    </div>
  );
}
