import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ReviewStar({ icon, id, confirm, handleMark, handleConfirm }) {

  return (
    <img
      onMouseEnter={() => {if (confirm === false) handleMark(id) }}
      onMouseLeave={() => {if (confirm === false) handleMark(-1) }}
      onClick={() => handleConfirm()}
      key={uuidv4()}
      className="NavBar-Icon"
      src={icon}
      alt="starIcon"
      id={id}
    />
  );
}
