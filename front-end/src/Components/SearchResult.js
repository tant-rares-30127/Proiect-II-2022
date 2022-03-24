import React from 'react'

export default function SearchResult({data}) {
    const dataToDisplay = data.map( d => {
        return (
            <a>{d}</a>
        )
    })
  return (
    <div className="SearchResult-container">{dataToDisplay}</div>
  )
}
