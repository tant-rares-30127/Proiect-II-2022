import React from 'react'
import promoImage from '../../Images/Get_in_touch.png'
import logo from '../../Images/Logo_transparent.png'

export default function PromoImage() {
  return (
    <div className='PromoImage-container'>
      <h2>Acces Is Closed. Community Members Only</h2>
        <div className='PromoImage-aux-container'>
          <img className='Register-promo-image' src={promoImage} alt='Promo'/>
          <div className='PromoImage-elements-container'>
            <img className='Logo Promo-Logo' src={logo} alt="Logo"/>
          </div>
      </div>
    </div>
  )
}
