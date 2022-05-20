import React from "react";
import productImage from "../../Images/Someting_new.png";
import heartIcon from "../../Images/Heart.png";
import starIcon from "../../Images/fullStar.png";

export default function Product({ product }) {
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
            <button className="Buy-product-btn">Buy now</button>
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
