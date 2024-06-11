import React from "react";
import LeftNavbar from "./LeftNavbar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex mt-16">
      <LeftNavbar />
      <MainContainer />
    </div>
  );
};

export default Body;
