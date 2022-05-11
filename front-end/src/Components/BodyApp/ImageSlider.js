import React, { useState, useMemo, useEffect } from "react";
import SliderButton from "./SliderButton";
import { v4 as uuidv4 } from "uuid";
import promo2Image from "../../Images/promo1.jpg";
import promoImage from "../../Images/promo2.jpg";
import promo1Image from "../../Images/promo3.jpg";
import promo3Image from "../../Images/promo4.jpg";

export default function ImageSlider() {
  const [imageToShow, setImageToShow] = useState(images[0].image);

  const buttonsContainer =  (
      <div className="SliderButtons-container">
        {images.map((image) => {
          let isChecked = false
          if (image.image === imageToShow) {
            isChecked = true
          }
          return (
            <SliderButton
              key={uuidv4()}
              handleClick={handleSliderButtonClick}
              imageKey={image.key}
              isChecked={isChecked}
            />
          );
        })}
      </div>
    )

  function handleSliderButtonClick(key) {
    let newImage = images.filter((element) => element.key === key);
    setImageToShow(newImage[0].image);
  }

  return (
    <div className="ImageSlider-container">
      <a href="/register">
        <img className="Promo-Image" src={imageToShow} alt="Promo" />
      </a>
      <div className="OverPromoImage-container">{buttonsContainer}</div>
    </div>
  );
}

const images = [
  {
    image: promoImage,
    key: uuidv4(),
  },
  {
    image: promo1Image,
    key: uuidv4(),
  },
  {
    image: promo2Image,
    key: uuidv4(),
  },
  {
    image: promo3Image,
    key: uuidv4()
  }
];
