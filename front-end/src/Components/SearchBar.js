import React from "react";

export default function SearchBar() {
  return (
    <span>
      <input 
        className="SearchBar"
        type="search" 
        placeholder="Search"
      ></input>
      <span>&#128269;</span>
    </span>
  );
}
