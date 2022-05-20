import React from 'react'
import Reviews from './Reviews';

export default function Details({ details }) { 

  return (
    <div className="Product-info-container">
      {details.text === undefined ? <Reviews details={details}/> : <>{details.text}</>}
    </div>
  )
}
