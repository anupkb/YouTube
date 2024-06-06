import React from "react";
import LeftNavbar from "./LeftNavbar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <LeftNavbar />
      <MainContainer />
    </div>
  );
};

export default Body;
