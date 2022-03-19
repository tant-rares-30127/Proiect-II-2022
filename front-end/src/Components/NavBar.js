import React from 'react'
import MenuOption from './MenuOption'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <header>
        <SearchBar />
        <MenuOption />
        <MenuOption />
    </header>
  )
}
