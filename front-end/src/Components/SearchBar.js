import React, { useState } from "react";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const [search, setSearch] = useState();

  function handleSearch(value) {
    const newSearch = data.filter((d) => d.includes(value));
    if (value !== "") {
      setSearch(newSearch);
    } else {
      setSearch(undefined);
    }
  }

  return (
    <div>
      <input
        className="SearchBar"
        type="search"
        placeholder="Type to search..."
        onInput={(e) => handleSearch(e.target.value)}
      ></input>
      <span>&#128269;</span>
      {search !== undefined ? <SearchResult data={search} /> : null}
    </div>
  );
}

const data = ["Lanterna", "Leptop", "Dulceata", "Tanc rusesc"];
