import React from 'react'
import Reviews from './Reviews';

export default function Details({ details, handleAddNewReview }) { 

  return (
    <div className="Product-info-container">
      {details.text === undefined ? <Reviews details={details} handleAddNewReview={handleAddNewReview}/> : <>{details.text}</>}
    </div>
  )
}
