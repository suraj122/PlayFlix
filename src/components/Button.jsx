import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-1 bg-gray-100 rounded-md font-medium first:bg-black first:text-white">
      {name}
    </button>
  );
};

export default Button;
