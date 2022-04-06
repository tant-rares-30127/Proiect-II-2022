import React from "react";

export default function SliderButton({ imageKey, handleClick }) {
  return (
    <div>
      <button onClick={() => handleClick(imageKey)}>0</button>
    </div>
  );
}
