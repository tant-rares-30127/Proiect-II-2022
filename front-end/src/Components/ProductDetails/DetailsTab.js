import React, { useState } from "react";
import TabButton from "./TabButton";
import Details from "./Details";

export default function DetailsTab() {
  const [curentTab, setCurrentTab] = useState(1);
  let details = "";

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
      />
    );
  });

  function handleClick(id) {
    if (curentTab === id) {
      setCurrentTab(0);
      return;
    }
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

const tabInfo = [
  {
    id: 1,
    name: "Description",
    info: "The iPhone 13 is too expensive.",
  },
  {
    id: 2,
    name: "Aditional Info",
    info: "The iPhone 13 is too cheap.",
  },
  {
    id: 3,
    name: "Reviews",
    info: "The iPhone 13 is not",
  },
];
