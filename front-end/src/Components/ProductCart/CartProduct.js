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
      <div>
        <div>
          <div>
            <button>-</button>
            <div>{data.amount}</div>
            <button>+</button>
          </div>
          <button>Remove</button>
        </div>
        <div>
          <div>{data.price}</div>
        </div>
      </div>
    </div>
  );
}
