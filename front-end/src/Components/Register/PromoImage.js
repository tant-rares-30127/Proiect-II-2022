import React from 'react'
import promoImage from '../../Images/Get_in_touch.png'
import logo from '../../Images/Logo_transparent.png'

export default function PromoImage() {
  return (
    <div className='PromoImage-container'>
      <h1>Acces Is Closed. Community Members Only</h1>
        <div className='PromoImage-aux-container'>
          <img className='Register-promo-image' src={promoImage} alt='Promo'/>
          <div className='PromoImage-elements-container'>
            <div className='InsidePromo-logo-container'>
              <img className='Logo Promo-Logo' src={logo} alt="Logo"/>
            </div>
            <div className='InsidePromo-text-container'>
              <h3>Informations about our company</h3>
              <a href="/">Get in touch...</a>
            </div>
          </div>
      </div>
    </div>
  )
}
