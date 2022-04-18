import React, { useState } from "react";
import SliderButton from "./SliderButton";
import { v4 as uuidv4 } from "uuid";
import promoImage from "../../Images/Happy_customer_online_shopping.png";
import promo1Image from "../../Images/slider1.jpg";
import promo2Image from "../../Images/slider2.jpg";

export default function ImageSlider() {
  const [imageToShow, setImageToShow] = useState(images[0].image);

  const sliderButtons = images.map((image) => {
    return (
      <SliderButton
        key={uuidv4()}
        handleClick={handleSliderButtonClick}
        imageKey={image.key}
      />
    );
  });

  function handleSliderButtonClick(key) {
    let newImage = images.filter((element) => element.key === key);
    setImageToShow(newImage[0].image);
  }

  return (
    <div className="ImageSlider-container">
        <a href="/register">
          <img className="Promo-Image" src={imageToShow} alt="Promo" />
        </a>
        <div className="OverPromoImage-container">
          <div className="SliderButtons-container">{sliderButtons}</div>
        </div>
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
];
