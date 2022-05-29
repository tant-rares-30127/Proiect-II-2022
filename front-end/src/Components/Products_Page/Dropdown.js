import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "./Styles/Dropdown.css";
import img1 from "../../Images/Arrow_down.png";
export default function Dropdown({ selected, setSelected, handleSort }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Stock", "Price", "Rating"];

  function handleSelectOption(e, option) {
    //setSelected(e.target.textContent)
    handleSort({ orderType: option.toLowerCase() });
  }
  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsActive(!isActive)}>
        Sort by
        <span>
          <img src={img1}></img>
        </span>
      </div>
      {isActive && (
        <div className="dropdown_content">
          {options.map((option) => (
            <div
              onClick={(e) => handleSelectOption(e, option)}
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
