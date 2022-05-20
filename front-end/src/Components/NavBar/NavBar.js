import React from "react";
import SearchBar from "./SearchBar";
import logo from "../../Images/Logo.jpg";
import MenuOptions from "./MenuOptions";

export default function NavBar() {
  return (
    <header className="Header">
      <div className="Header-left-container">
        <a className="Image-link-container" href="../../">
          <img className="Logo" src={logo} alt="Logo" />
        </a>
        <SearchBar />
      </div>
      <MenuOptions />
    </header>
  );
}
