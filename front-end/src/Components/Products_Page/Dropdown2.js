import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "./Styles/Dropdown.css";
import img1 from "../../Images/Arrow_down.png";
export default function Dropdown2({ selected, setSelected, handleSort }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Ascending", "Descening"];

  function hanldeSortingOption(e, option) {
    handleSort({order: option.toLowerCase()})
  }
  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsActive(!isActive)}>
        Choose option
        <span>
          <img src={img1}></img>
        </span>
      </div>
      {isActive && (
        <div className="dropdown_content">
          {options.map((option) => (
            <div
              onClick={(e) => hanldeSortingOption(e, option)}
              className="dropdown_item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
