import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuOption from "./MenuOption";
import favoritesIcon from "../../Images/Heart.png";
import productsIcon from "../../Images/Shop.png";
import accountIcon from "../../Images/UserCircle.png";

export default function MenuOptions() {
  const [options, setOptions] = useState(menuOptions)

  const menuOptionComponents = options.map((option) => {
    return <MenuOption key={uuidv4()} {...option} handleDropDown={handleDropDown}/>;
  });

  function handleDropDown(optionName) {
    let newOptions = options.map(option => option)
    newOptions.forEach(option => {
        if (option.name === optionName) {
            option.isActive = !option.isActive
        } else {
            option.isActive = false
        }
    })
    setOptions(newOptions)
  }

  return <div className="Header-right-container">{menuOptionComponents}</div>;
}

const menuOptions = [
  {
    name: "Favorites",
    icon: favoritesIcon,
    isActive: false
  },
  {
    name: "My Products",
    icon: productsIcon,
    isActive: false
  },
  {
    name: "Account",
    icon: accountIcon,
    isActive: false
  },
];
