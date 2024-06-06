import React from "react";
import {
  HAMBURGER_ICON,
  YOUTUBE_LOGO,
  SEARCH_ICON,
  USER_ICON,
} from "../utils/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={HAMBURGER_ICON}
          alt="humBurgerMenu"
          className="h-6 md:h-8 lg:h-9"
        />
        <img src={YOUTUBE_LOGO} alt="logo" className="h-8 md:h-10 lg:h-11" />
      </div>

      <div className="flex items-center flex-1 max-w-lg mx-4">
        <input
          type="text"
          className="flex-1 border border-gray-400 rounded-l-full px-4 py-1 focus:outline-none"
          placeholder="Search"
        />
        <button className="bg-gray-400 border border-gray-400 rounded-r-full p-1">
          <img
            src={SEARCH_ICON}
            alt="searchIcon"
            className="h-4 md:h-5 lg:h-6"
          />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <img src={USER_ICON} alt="userIcon" className="h-8" />
      </div>
    </header>
  );
};

export default Header;
