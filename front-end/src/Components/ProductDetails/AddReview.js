import React from 'react'
import ReviewStars from './ReviewStars'

export default function AddReview() {
  return (
    <div>
        <h2>Add review</h2>
        <div className="Review-person-name">{"Goloman Petrachiu"}</div>
        <ReviewStars />
        <div className='Review-text-area-container'>
            <textarea className='Review-text-area'/>
        </div>
        <button className='Submit-review-btn'>Submit</button>
    </div>
  )
}
