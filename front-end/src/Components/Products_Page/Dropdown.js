import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "./Styles/Dropdown.css";

export default function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Option1", "Option2", "Optisacaszon3", "Opticzzccon4"];
  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsActive(!isActive)}>
        Choose option
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown_content">
          {options.map((option) => (
            <div
              onClick={(e) => setSelected(e.target.textContent)}
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
