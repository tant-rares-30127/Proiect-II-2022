import React from "react";
import fullStarIcon from "../../Images/fullStar.png";
import emptyStartIcon from "../../Images/emptyStar.png";
import { v4 as uuidv4 } from "uuid";

const maxMark = 5;

export default function Review({ review }) {
  console.log("review")
  console.log(review)

  function manageReviewStars(mark) {
    if (mark > maxMark || mark <= 0) {
      console.log("Invalid mark passed to function");
      return <>Naspa</>;
    }

    let func = () => {
      let stars = [];
      for (let i = 1; i <= maxMark; i++) {
        if (i <= mark) {
          stars[i] = 1;
        } else {
          stars[i] = 0;
        }
      }
      return stars.map((s) => {
        if (s === 0)
          return (
            <img key={uuidv4()} className="NavBar-Icon" src={emptyStartIcon} alt="starIcon" />
          );
        return (
          <img key={uuidv4()} className="NavBar-Icon" src={fullStarIcon} alt="starIcon" />
        );
      });
    };

    return func();
  }

  return (
    <div className="Review-container">
      <div>
        <div className="Review-person-name">{review.name}</div>
        <div>{manageReviewStars(review.mark)}</div>
      </div>
      <div className="Review-description">
        {review.message}
        <hr></hr>
      </div>
    </div>
  );
}
