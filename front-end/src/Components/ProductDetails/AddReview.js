import React, { useState, useContext, useEffect } from "react";
import ReviewStars from "./ReviewStars";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function AddReview({ handleAddReview }) {
  const [newReview, setNewReview] = useState();
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null && user !== undefined) {
      setNewReview(prev => {
        return { ...prev, ...{name: user.username, userId: user.id}}
      })
    }
  }, [user])

  function handleMark(mark) {
    setNewReview(prev => {
      return { ...prev, mark: mark }
    })
  }

  function handleSubmitReview() {
    if (user === null || user === undefined) {
      navigate("/login");
      return
    }
    handleAddReview(newReview)
  }

  return (
    <div>
      <h2>Add review</h2>
      <div className="Review-person-name">{(user !== null && user !== undefined) ? user.username : "No name"}</div>
      <ReviewStars handleNewMark={handleMark}/>
      <div className="Review-text-area-container">
        <textarea
          className="Review-text-area"
          onChange={(e) =>
            setNewReview((prev) => {
              return { ...prev, message: e.target.value };
            })
          }
        />
      </div>
      <button onClick={handleSubmitReview} className="Submit-review-btn">
        Submit
      </button>
    </div>
  );
}
