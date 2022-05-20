import React, { useEffect, useContext } from "react";
import { MenuOptionsContext } from "./MenuOptions";

export default function DropDownElement({ product }) {
  const handleHideAll = useContext(MenuOptionsContext)

  // useEffect(()=> {
  //   document.body.addEventListener("click", handleHideAll)

  //   return () => {document.body.removeEventListener("click", handleHideAll)}
  // }, [])

  return (
    <div className="DropDownElement-container Sexy-border">
      <img className="DropDown-image" src={product.imageAdress} />
      <div className="DropDownElement-product-details-container">
        <div className="DropDownElement-product-description DropDownElement-font-size">
          {product.name}
        </div>
        <div className="DropDownElement-font-size">{product.price} Lei</div>
      </div>
      <div className="DropDownElement-font-size">(x{product.amount})</div>
    </div>
  );
}
