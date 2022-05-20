import React from "react";
import arrowDown from "../../Images/Arrow_down.png";
import DropDown from "./DropDown";
const arrowIconWidth = "1.3rem"

export default function MenuOption({ name, icon, isActive, handleDropDown }) {

  const arrowIconStyle = {
    width: arrowIconWidth,
    transform: !isActive ? "none" : "scaleY(-1)"
  }

  return (
    <div className="MenuOption-container">
      <button
      onClick={() => handleDropDown(name)}
       className="MenuOption-btn">
        <div>
          <img className="NavBar-Icon" src={icon} alt="icon" />
        </div>
        <div>{name}</div>
        <div>
          <img style={arrowIconStyle} className="Arrow-Icon" src={arrowDown} alt="arrow" />
        </div>
      </button>
      <div>
        <div className="Options-container">
          {isActive ? <DropDown products={products} optionName={name}/> : null}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    name: "Telefon mobil Apple iPhone 12",
    price: 2.688,
    amount: 2,
  },
  {
    name: "Telefon mobil Samsung S20",
    price: 3.688,
    amount: 1
  },
  {
    name: "Telefon mobil Apple iPhone 12",
    price: 4.688,
    amount: 4
  }
]
