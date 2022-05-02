import React from "react";

export default function CartProduct({ data }) {
  console.log(data);
  return (
    <div>
      <div>
        <img src={data.image} alt="prod-img"></img>
        <div>
          <div>{data.name}</div>
          <div>{data.description}</div>
          <div>{data.price}</div>
        </div>
      </div>
      <div>
        <button>-</button>
        <div>{data.amount}</div>
        <button>+</button>
      </div>
      <div>
        <div>{data.price}</div>
      </div>
    </div>
  );
}
