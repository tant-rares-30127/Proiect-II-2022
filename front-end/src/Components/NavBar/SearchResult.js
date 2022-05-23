import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SearchResult({ data, handleHideResults }) {
  const dataToDisplay = data.map((d) => {
    return (
      <a onClick={() => handleSearchClick(d)} key={uuidv4()} href="../../productDetails" rel="noreferrer">
        {d}
      </a>
    );
  });

  useEffect(() => {
    document.body.addEventListener("click", handleHideResults);

    return () =>
      document.body.removeEventListener("click", handleHideResults);
  });

  function handleSearchClick(productName) {
    localStorage.setItem('productName', productName)
  }

  return <div className="SearchResult-container">{dataToDisplay}</div>;
}
