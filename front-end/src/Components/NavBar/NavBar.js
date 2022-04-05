import React from "react";
import MenuOption from "./MenuOption";
import SearchBar from "./SearchBar";
import logo from "../../Images/Logo.jpg";
import { v4 as uuidv4 } from "uuid";
import favoritesIcon from "../../Images/Heart.png";
import productsIcon from "../../Images/Shop.png";
import accountIcon from "../../Images/UserCircle.png";

export default function NavBar() {
  const menuOptionComponents = menuOptions.map((menuOptions) => {
    return <MenuOption key={uuidv4()} {...menuOptions} />;
  });

  console.log(menuOptions)

  return (
    <header className="Header">
      <div className="Header-left-container">
        <a className="Image-link-container" href="../../">
          <img className="Logo" src={logo} alt="Logo" />
        </a>
        <SearchBar />
      </div>
      <div className="Header-right-container">{menuOptionComponents}</div>
    </header>
  );
}

const menuOptions = [
  {
    name: "Favorites",
    icon: favoritesIcon,
  },
  {
    name: "My Products",
    icon: productsIcon,
  },
  {
    name: "Account",
    icon: accountIcon,
  },
];
