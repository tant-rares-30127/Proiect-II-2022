import React from 'react'

export default function MenuOption( {OptionName} ) {
  return (
    <div className='MenuOption-container'>
      <button className='MenuOption-btn'>{OptionName}</button>
      <div className='Options-container'>
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
      </div>
    </div>
  )
}
