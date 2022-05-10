import React from "react";
import arrowDown from "../../Images/Arrow_down.png";

export default function MenuOption({ name, icon }) {
  return (
    <div className="MenuOption-container">
      <button className="MenuOption-btn">
        <div>
          <img className="NavBar-Icon" src={icon} alt="icon" />
        </div>
        <div>{name}</div>
        <div>
          <img className="Arrow-Icon" src={arrowDown} alt="arrow" />
        </div>
      </button>
      <div>
        <div className="Options-container">
          <a href="../../">Link1</a>
          <a href="../../">Link2</a>
          <a href="../../">Link3</a>
        </div>
      </div>
    </div>
  );
}
