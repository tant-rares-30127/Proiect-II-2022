import React from "react";
import productImage from "../../Images/Someting_new.png";
import heartIcon from "../../Images/Heart.png";
import starIcon from "../../Images/fullStar.png"

export default function Product() {
  return (
    <div className="Main-details-container">
      <div className="Product-details-container">
        <div className="Product-image-container">
          <img src={productImage} alt="Product" />
        </div>
        <div className="Product-elemnents-container">
          <div className="Product-name-container">
            <h2>Telefon mobil Apple iPhone 13</h2>
            <div>4.6 <img className="NavBar-Icon" src={starIcon} alt="starIcon" /></div>
            <div className="Price-detail-container">
              <div>2.689.00</div>
              <div>Lei</div>
            </div>
          </div>
          <p>
            &emsp;The iPhon 13 features a gorgeous durable flat-edge design with
            an aluminum frame. The display features Ceramic Shield on the front,
            witch is the toughest and most durable smartphone glass
          </p>
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
