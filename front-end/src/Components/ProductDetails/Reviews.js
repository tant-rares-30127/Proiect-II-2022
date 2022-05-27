import React, { useState } from "react";
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";
import AddReview from "./AddReview";

export default function Reviews({ details, handleAddNewReview }) {
  const [addReview, setAddReview] = useState(false);
  const reviews = getReviews();

  function getReviews() {
    if (details.text !== undefined) return null;
    return details.reviews.map((r) => <Review key={uuidv4()} review={r} />);
  }

  function handleAddReview(newReview) {
    setAddReview((prev) => !prev)
    handleAddNewReview(newReview)
  }

  return (
    <>
      {reviews.length > 0 ? reviews : (<div>Be the first to add a review for this product!</div>)}
      {addReview ? (
        <AddReview handleAddReview={handleAddReview} />
      ) : (
        <button className="Submit-review-btn" onClick={() => setAddReview((prev) => !prev)}>
          Add Review
        </button>
      )}
    </>
  );
}
