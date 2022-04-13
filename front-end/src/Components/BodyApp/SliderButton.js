import React from "react";

export default function SliderButton({ imageKey, handleClick }) {
  return (
    <>
      <input
        className="ImageSlider-selector" 
        onChange={() => handleClick(imageKey)} type='radio' name="select"></input>
    </>
  );
}
