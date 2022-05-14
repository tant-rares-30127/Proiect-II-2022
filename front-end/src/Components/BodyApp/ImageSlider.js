import React, { useState, useEffect } from "react";
import SliderButton from "./SliderButton";
import { v4 as uuidv4 } from "uuid";
import promo2Image from "../../Images/promo1.jpg";
import promoImage from "../../Images/promo2.jpg";
import promo1Image from "../../Images/promo3.jpg";
import promo3Image from "../../Images/promo4.jpg";

export default function ImageSlider() {
  const [imageToShow, setImageToShow] = useState(images[0].image);
  const [power, setPower] = useState(false)
  const [auto, setAuto] = useState(false)

  useEffect(() => {
    setTimeout(powerAutoslider, 6000)
    setTimeout(() => setAuto(true), 1000)
  }, [])

  useEffect(() => {
    autoSlider()

  }, [power])

  const buttonsContainer = (
    <div className="SliderButtons-container">
      {images.map((image) => {
        let isChecked = false;
        if (image.image === imageToShow) {
          isChecked = true;
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
  );

  async function powerAutoslider() {
    setPower(prev => !prev)
    if (auto === false) {
      setAuto(prev => !prev)
    }
    setTimeout(powerAutoslider, 6000)
  }

  function autoSlider() {
    if (auto === true) {
      let newImage = images.find(i => i.image === imageToShow)
      let index = images.indexOf(newImage)
      if ((index + 1) > (images.length - 1)) {
        newImage = images[0]
      } else {
        newImage = images[index + 1]
      }
      setImageToShow(newImage.image)
    } 
  }

  function handleSliderButtonClick(key) {
    let newImage = images.filter((element) => element.key === key);
    setImageToShow(newImage[0].image);
    setAuto(false)
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
    key: uuidv4(),
  },
];
