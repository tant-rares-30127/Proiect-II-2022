import React from "react";

export default function SliderButton({ imageKey, handleClick, isChecked }) {
  return (
    <>
      <input
        checked={isChecked}
        className="ImageSlider-selector" 
        onChange={() => handleClick(imageKey)} type='radio' name="select"></input>
    </>
  );
}
