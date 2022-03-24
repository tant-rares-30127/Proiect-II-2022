import React from 'react'
import MenuOption from './MenuOption'
import SearchBar from './SearchBar'
import image from '../Images/Logo.jpg';
import { v4 as uuidv4 } from "uuid";

export default function NavBar() {
  const menuOptionComponents = menuOptions.map( m => {
    return (<MenuOption key={uuidv4()} OptionName={m}/>)
  })

  return (
    <header className='Header'>
        <div className='Header-left-container'>
          <img 
              className='Logo'
              src={image}
              alt='Logo'/>
          <SearchBar />
        </div>
        <div className='Header-right-container'>
          {menuOptionComponents}
        </div>
    </header>
  )
}

const menuOptions = ['Favorites', 'My Products', 'Account'];