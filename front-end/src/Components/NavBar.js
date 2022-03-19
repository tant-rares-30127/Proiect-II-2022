import React from 'react'
import MenuOption from './MenuOption'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <header className='Header'>
        <img 
            className='Logo'
            src='D:\FACULTATE\An 3\Informatica industriala\Proiect-II-2022\front-end\Images\Logo.jpg'
            alt='Logo'></img>
        <SearchBar />
        <MenuOption />
        <MenuOption />
        <MenuOption />
    </header>
  )
}
