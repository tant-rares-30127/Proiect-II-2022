import React, { useState } from "react";

export default function TabButton({ name, id, isActive, handleClick, isSameTab }) {
  const [isHovered, setIsHovered] = useState(false)

  const theme = {
    backgroundColor: isActive ? "#FCF9EB" : "#F9F0D1",
    borderBottomLeftRadius: "0rem",
  };

  if (isHovered === true && isActive === false) theme.backgroundColor = "#F8DAB0"
  if (isSameTab === true && name==="Description") theme.borderBottomLeftRadius = "1rem"

  return (
    <button
      style={theme}
      id={name}
      onClick={() => handleClick(id)}
      className="Product-tab-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </button>
  );
}
