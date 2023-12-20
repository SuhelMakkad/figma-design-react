import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-gray-900 hover:bg-gray-700 py-3 px-5 focus-visible:outline outline-gray-300 outline-[3px] text-white rounded-md">
      {children}
    </button>
  );
};

export default Button;
