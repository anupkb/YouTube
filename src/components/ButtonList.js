import React from "react";

const ButtonList = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 mx-2 my-3 rounded-lg text-sm font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default ButtonList;
