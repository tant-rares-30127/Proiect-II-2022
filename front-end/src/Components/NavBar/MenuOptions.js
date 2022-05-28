import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuOption from "./MenuOption";
import productsIcon from "../../Images/Shop.png";
import accountIcon from "../../Images/UserCircle.png";

export const MenuOptionsContext = React.createContext();

export default function MenuOptions() {
  const [options, setOptions] = useState(menuOptions);

  const MenuOptionsContextValue = handleHideAll

  const menuOptionComponents = options.map((option) => {
    return (
      <MenuOption key={uuidv4()} {...option} handleDropDown={handleDropDown} />
    );
  });

  function handleDropDown(optionName) {
    let newOptions = options.map((option) => option);
    newOptions.forEach((option) => {
      if (option.name === optionName) {
        option.isActive = !option.isActive;
      } else {
        option.isActive = false;
      }
    });
    setOptions(newOptions);
  }

  function handleHideAll() {
    let newOptions = options.map((option) => option);
    newOptions.forEach((option) => (option.isActive = false));
    setOptions(newOptions);
  }

  return (
    <MenuOptionsContext.Provider value={MenuOptionsContextValue}>
      <div className="Header-right-container">{menuOptionComponents}</div>
    </MenuOptionsContext.Provider>
  );
}

const menuOptions = [
  {
    name: "My Products",
    icon: productsIcon,
    isActive: false,
  },
  {
    name: "Account",
    icon: accountIcon,
    isActive: false,
  },
];
