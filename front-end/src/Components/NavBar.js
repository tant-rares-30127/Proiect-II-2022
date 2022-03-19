import React from 'react'
import MenuOption from './MenuOption'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <header className='Header'>
        <img 
            className='Logo'
            src='C:\Users\iusti\OneDrive\Pictures\Wallpapers\poza.jpg'
            alt='Logo'/>
        <SearchBar />
        <MenuOption OptionName={'Account'}/>
        <MenuOption OptionName={'Favorites'}/>
        <MenuOption OptionName={'My Products'}/>
    </header>
  )
}
