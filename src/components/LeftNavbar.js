import React from "react";

const LeftNavbar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <ul className="space-y-2">
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12l2-2m0 0l2-2m-2 2l-2-2m2 2v6m-6 2a2 2 0 002 2h8a2 2 0 002-2v-6m-2-2l2 2m-2-2l2 2m0 0v6"
            />
          </svg>
          <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Subscriptions</span>
        </li>
      </ul>

      <hr className="my-4 border-gray-300" />

      <ul className="space-y-2">
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3v18h18V3H3zm16 16H5V5h14v14zM8 11h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2z"
            />
          </svg>
          <span>Library</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>History</span>
        </li>
      </ul>

      <hr className="my-4 border-gray-300" />

      <h4 className="text-lg font-bold text-gray-800 mb-2">Explore</h4>
      <ul className="space-y-2">
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.5 7H7v7.5H3v-7.5H-0.5v7.5H0v4.5H4.5v-4.5H7V24h3.5V16.5h3V24h3.5V7H10.5z" />
          </svg>
          <span>Trending</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Shopping</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Movies</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Live</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>News</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Courses</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Fashion & Beauty</span>
        </li>
        <li className="flex items-center space-x-3 text-lg font-semibold text-gray-700 hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Podcasts</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
