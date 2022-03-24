import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function SearchResult({data}) {
    const dataToDisplay = data.map( d => {
        return (
            <a key={uuidv4()}>{d}</a>
        )
    })
  return (
    <div className="SearchResult-container">{dataToDisplay}</div>
  )
}
