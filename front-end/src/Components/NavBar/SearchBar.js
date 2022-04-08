import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import searchIcon from "../../Images/Search.png"

export default function SearchBar() {
  const [search, setSearch] = useState();
  const [data, setData] = useState(toShowData)

  useEffect(() => {
    axios
      .get("https://localhost:5001/Products/SearchBarClick")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        const dataFromApi = data.map(d => {
          return d.name
        })

        setData(dataFromApi)
      });
  }, [])

  function handleSearch(value) {
    const newSearch = data.filter((d) => d.includes(value));
    if (value === "" || newSearch.length === 0) {
      setSearch(undefined);
    } else {
      setSearch(newSearch);
    }
  }

  function showRecomandations() {
    setSearch(data);
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
      <img 
        className="Search-Icon"
        src={searchIcon}
        alt="Search icon"></img>
      </div>
      {search !== undefined ? <SearchResult data={search} handleHideResults={handleHideResults}/> : null}
    </div>
  );
}

const toShowData = ["Lanterna", "Leptop", "Dulceata", "Tanc rusesc"];
