import React from 'react'
import promoImage from '../../Images/Get_in_touch.png'

export default function PromoImage() {
  return (
    <div className='PromoImage-container'>
      <h2>Acces Is Closed. Community Members Only</h2>
      <img className='Register-promo-image' src={promoImage} alt='Image'/>
    </div>
  )
}
