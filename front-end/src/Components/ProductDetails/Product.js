import React from "react";
import heartIcon from "../../Images/Heart.png";
import starIcon from "../../Images/fullStar.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product({ product }) {
  const navigate = useNavigate();

  function handleButNowBtnClick() {
    // TODO: api call to add product to cart
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null || user === undefined) {
      navigate("/login");
    }
    axios({
      method: "post",
      url: "https://localhost:5001/ShoppingCarts/AddProductToCart?id="+product.id,
      data: user
    })
    .then((response) => response.data)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => console.log(err))
    .catch((err) => console.log(err))
  }

  

  return (
    <div className="Main-details-container">
      <div className="Product-details-container">
        <div className="Product-image-container">
          <img
            src={product === undefined ? null : product.imageAdress}
            alt="Product"
          />
        </div>
        <div className="Product-elemnents-container">
          <div className="Product-name-container">
            <h2>{product === undefined ? null : product.name}</h2>
            <div>
              4.6 <img className="NavBar-Icon" src={starIcon} alt="starIcon" />
            </div>
            <div className="Price-detail-container">
              <div>{product === undefined ? null : product.price}</div>
              <div>Lei</div>
            </div>
          </div>
          <div className="Details-buttons-container">
            <button onClick={handleButNowBtnClick} className="Buy-product-btn">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
