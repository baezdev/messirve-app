import React from "react";

const Label = ({ children, color }) => {
  switch (children) {
    case "excelente":
      return (
        <p
          className={`p-2 text-base font-semibold uppercase rounded-lg bg-opacity-30 bg-[#00FFAB] w-fit`}
        >
          {children}
        </p>
      );
    case "bueno":
      return (
        <p
          className={`p-2 text-base font-semibold uppercase rounded-lg bg-opacity-30 bg-[#FFEA11] w-fit`}
        >
          {children}
        </p>
      );
    case "regular":
      return (
        <p
          className={`p-2 text-base font-semibold uppercase rounded-lg bg-opacity-30 bg-[#D61C4E] w-fit`}
        >
          {children}
        </p>
      );
  }
};

export default Label;
