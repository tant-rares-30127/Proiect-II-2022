import React, { useState } from "react";
import fullStarIcon from "../../Images/fullStar.png";
import emptyStartIcon from "../../Images/emptyStar.png";
import { v4 as uuidv4 } from "uuid";
import ReviewStar from "./ReviewStar";

export default function ReviewStars({ handleNewMark }) {
  const [mark, setMark] = useState([0, 0, 0, 0, 0]);
  const [confirm, setConfirm] = useState(false);
  let k = -1;
  const reviewStars = mark.map((s) => {
    if (s === 0) {
      k = k + 1;
      return (
        <ReviewStar
          key={uuidv4()}
          icon={emptyStartIcon}
          id={k}
          confirm={confirm}
          handleMark={handleMark}
          handleConfirm={handleConfirm}
        />
      );
    }
    if (s === 1) {
      k = k + 1;
      return (
        <ReviewStar
          key={uuidv4()}
          icon={fullStarIcon}
          id={k}
          confirm={confirm}
          handleMark={handleMark}
          handleConfirm={handleConfirm}
        />
      );
    }
  });

  function handleMark(id) {
    let aux = 0;
    let newMark = mark.map((s) => s);
    for (let i = 0; i < mark.length; i++) {
      if (id >= i) {
        newMark[i] = 1;
        aux = aux + 1;
      } else {
        newMark[i] = 0;
      }
    }
    setMark(newMark);
    handleNewMark(aux);
  }

  function handleConfirm() {
    setConfirm((prev) => !prev);
  }

  return <div>{reviewStars}</div>;
}
