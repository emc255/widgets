import React, { useState } from "react";

const items = [
  {
    title: "eunha",
    content: "smol",
  },
  {
    title: "sinb",
    content: "savage",
  },
  {
    title: "yerin",
    content: "princess",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={index}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
