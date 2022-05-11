import React, { useState } from "react";
import TabButton from "./TabButton";
import Details from "./Details";

export default function DetailsTab() {
  const [curentTab, setCurrentTab] = useState(1)
  const [isSameTab, setIsSameTab] = useState(false)
  let details = {}


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

  return (
    <div className="Tab-main-container">
      <div className="Tab-aux-container">
        <div className="Product-tab-container">{tab}</div>
        {curentTab === 0 ? null : <Details details={details} />}
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Sebastian Daulalopata",
    mark: 1,
    message: "I sold my house so that I could afford to buy this phone."
  },
  {
    name: "Dragos Lovescu",
    mark: 4,
    message: "Great product to leave on the shelf"
  }
]

const tabInfo = [
  {
    id: 1,
    name: "Description",
    info: {text: "The iPhone 13 is too expensive."}
  },
  {
    id: 2,
    name: "Reviews",
    info: {reviews: reviews}
  },
];

