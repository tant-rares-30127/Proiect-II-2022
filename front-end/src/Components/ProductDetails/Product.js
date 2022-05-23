import React from "react";
import heartIcon from "../../Images/Heart.png";
import starIcon from "../../Images/fullStar.png";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate()

  function handleButNowBtnClick() {
    // TODO: api call to add product to cart
    const user = JSON.parse(localStorage.getItem('user'))
    if (user === null || user === undefined) {
      navigate('/login')
    }
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
          <p>&emsp;{product === undefined ? null : product.description}</p>
          <div className="Details-buttons-container">
            <button onClick={handleButNowBtnClick} className="Buy-product-btn">Buy now</button>
            <button className="Fav-product-btn">
              <img className="NavBar-Icon" src={heartIcon} alt="Heart Icon" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
