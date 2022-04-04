import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SearchResult({ data, handleHideResults }) {
  const dataToDisplay = data.map((d) => {
    return (
      <a key={uuidv4()} href="../../dummy1" rel="noreferrer">
        {d}
      </a>
    );
  });

  useEffect(() => {
    document.body.addEventListener("click", handleHideResults);

    return () =>
      document.body.removeEventListener("click", handleHideResults);
  });

  return <div className="SearchResult-container">{dataToDisplay}</div>;
}
