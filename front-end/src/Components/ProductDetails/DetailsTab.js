import React, { useState, useEffect } from "react";
import axios from "axios";
import TabButton from "./TabButton";
import Details from "./Details";

export default function DetailsTab({ description, productId }) {
  const [curentTab, setCurrentTab] = useState(1)
  const [isSameTab, setIsSameTab] = useState(false)
  const [reviews, setReviews] = useState([])
  let details = {}
  useEffect(() => {
    axios
      .get("https://localhost:5001/Reviews/ReturnReviews?id="+productId)
      .then((response) => {
        return response.data;
      })
      .then(data => {
        let newReviews = data.map(d => {
          return {name: d.user.username, mark: d.rating, message: d.comment }
        })
        setReviews(newReviews)
      })
  }, [productId])

  const tabInfo = [
    {
      id: 1,
      name: "Description",
      info: {text: description}
    },
    {
      id: 2,
      name: "Reviews",
      info: {reviews: reviews}
    },
  ];

  const tab = tabInfo.map((t) => {
    let isActive = false;
    if (curentTab === t.id) {
      isActive = true;
      details = t.info;
    }
    return (
      <TabButton
        key={t.id}
        name={t.name}
        id={t.id}
        isActive={isActive}
        handleClick={handleClick}
        isSameTab = {isSameTab}
      />
    );
  });

  function handleClick(id) {
    if (curentTab === id) {
      setIsSameTab(true)
      setCurrentTab(0);
      return;
    }
    setIsSameTab(false)
    setCurrentTab(id);
  }

  function handleAddNewReview(review) {
    console.log("No ce naiba")
    console.log(review)
    console.log({
      id: 3,
      userId: review.userId,
      productId: productId,
      comment: review.message,
      rating: review.mark
    })
    axios({
      method: "post",
      url: "https://localhost:5001/Reviews/AddReview",
      data: {
        id: 3,
        userId: review.userId,
        productId: productId,
        comment: review.message,
        rating: review.mark
      }
    })
    let newReviews = reviews.map(r => r)
    setReviews([review, ...newReviews])
  }

  return (
    <div className="Tab-main-container">
      <div className="Tab-aux-container">
        <div className="Product-tab-container">{tab}</div>
        {curentTab === 0 ? null : <Details details={details} handleAddNewReview={handleAddNewReview} />}
      </div>
    </div>
  );
}

// const reviews = [
//   {
//     name: "Sebastian Daulalopata",
//     mark: 1,
//     message: "I sold my house so that I could afford to buy this phone."
//   },
//   {
//     name: "Dragos Lovescu",
//     mark: 4,
//     message: "Great product to leave on the shelf"
//   }
// ]



