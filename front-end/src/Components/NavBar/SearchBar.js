import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import searchIcon from "../../Images/Search.png";

export default function SearchBar() {
  const [search, setSearch] = useState();

  function handleSearch(value) {
    if (value === '') {
      setSearch(undefined)
      return
    }
    console.log("https://localhost:5001/Products/SearchBarType?text=" + value)
    axios
      .get("https://localhost:5001/Products/SearchBarType?text=" + value)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        const dataFromApi = data.map((d) => {
          return d.name;
        });
        setSearch(dataFromApi)
      })
      .catch((error) => console.log(error));
  }

  function showRecomandations() {
    axios
      .get("https://localhost:5001/Products/SearchBarClick")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        const dataFromApi = data.map((d) => {
          return d.name;
        });
        setSearch(dataFromApi);
      })
      .catch((error) => console.log(error));
  }

  function handleHideResults() {
    setSearch(undefined);
  }

  return (
    <div>
      <div className="Search-bar-container">
        <input
          className="SearchBar"
          type="search"
          placeholder="Type to search..."
          onChange={(e) => handleSearch(e.target.value)}
          onClick={(e) => showRecomandations()}
        ></input>
        <img className="Search-Icon" src={searchIcon} alt="Search icon"></img>
      </div>
      {search !== undefined ? (
        <SearchResult data={search} handleHideResults={handleHideResults} />
      ) : null}
    </div>
  );
}
