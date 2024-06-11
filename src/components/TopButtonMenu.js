import React from "react";
import ButtonList from "./ButtonList";

const TopButtonMenu = () => {
  const buttonList = [
    "All",
    "Shorts",
    "Unwatched",
    "Recently Uploaded",
    "Live",
    "Podcast",
    "Meetup",
    "Tech",
    "AI",
    "GSoC",
    "Freelance",
    "Remote Jobs",
  ];

  return (
    <div className="flex">
      {buttonList.map((button, index) => (
        <ButtonList key={index} name={button} />
      ))}
    </div>
  );
};

export default TopButtonMenu;
