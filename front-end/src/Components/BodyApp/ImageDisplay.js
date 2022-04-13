import React, { useState } from "react";

export const ImageSliderContext = React.createContext();

export default function ImageDisplay({ images }) {
  const [imageToShow, setImageToShow] = useState(images[0].image);
  const imageSliderContextValue = { handleSliderButtonClick: handleSliderButtonClick };

  function handleSliderButtonClick(key) {
    let newImage = images.filter((element) => element.key === key);
    setImageToShow(newImage[0].image);
  }

  return (
    <ImageSliderContext.Provider value={imageSliderContextValue}>
      <a href="/register">
        <img className="Promo-Image" src={imageToShow} alt="Promo" />
      </a>
    </ImageSliderContext.Provider>
  );
}
