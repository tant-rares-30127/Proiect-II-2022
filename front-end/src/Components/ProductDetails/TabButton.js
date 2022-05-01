import React from 'react'

export default function TabButton({ name, id, isActive, handleClick }) {
    const theme = {
        backgroundColor: isActive ? "#FCF9EB" : "#F9F0D1"
    }
  return (
    <button style={theme} onClick={() => handleClick(id)} className="Product-tab-btn">{name}</button>
  )
}
