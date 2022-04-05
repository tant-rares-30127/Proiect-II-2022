import React from 'react'

export default function MenuOption( {OptionName} ) {
  return (
    <div className='MenuOption-container'>
      <button className='MenuOption-btn'>{OptionName}</button>
      <div className='Options-container'>
        <a href='../../'>Link1</a>
        <a href='../../'>Link2</a>
        <a href='../../'>Link3</a>
      </div>
    </div>
  )
}
