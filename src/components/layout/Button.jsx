import React from "react";

const Button = ({ children, type }) => {
  return (
    <button
      className="w-full text-xl font-bold text-center text-white rounded-lg h-14 bg-blue"
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
