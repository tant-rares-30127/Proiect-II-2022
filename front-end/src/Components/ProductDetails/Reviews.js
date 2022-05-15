import React, { useState } from "react";
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";
import AddReview from "./AddReview";

export default function Reviews({ details }) {
  const [addReview, setAddReview] = useState(false);
  const reviews = getReviews();

  function getReviews() {
    if (details.text !== undefined) return null;

    return details.reviews.map((r) => <Review key={uuidv4()} review={r} />);
  }

  function handleAddReview() {
    setAddReview((prev) => !prev);
  }

  return (
    <>
      {reviews}
      {(addReview) ? (
        <AddReview handleAddReview={handleAddReview}/>
      ) : (
        <button className="Submit-review-btn" onClick={() => handleAddReview()}>
          Add Review
        </button>
      )}
    </>
  );
}
