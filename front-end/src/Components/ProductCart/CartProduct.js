import React from "react";

export default function CartProduct({ data }) {
  console.log(data);
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
            <button className="Red-btn Amount-btn">-</button>
            <div>{data.amount}</div>
            <button className="Green-btn Amount-btn">+</button>
          </div>
          <button className="Remove-btn">Remove</button>
        </div>
        <div className="ProductCart-price-container">
          <div>{data.price} Lei</div>
        </div>
      </div>
    </div>
  );
}
