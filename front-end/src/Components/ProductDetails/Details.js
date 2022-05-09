import React from 'react'
import Review from './Review'
import { v4 as uuidv4 } from "uuid";

export default function Details({ details }) {

  function getReviews() {
    if (details.text !== undefined) return null

    return details.reviews.map((r) => <Review key={uuidv4()} review={r} />)
  }

  const reviews = getReviews()  

  return (
    <div className="Product-info-container">
      {reviews === null ? <>{details.text}</> : reviews}
    </div>
  )
}
