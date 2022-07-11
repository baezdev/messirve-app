import React from "react";

const SocialNetwork = ({ icon, onClick }) => {
  return (
    <div
      className="flex items-center justify-center duration-200 bg-white border rounded-lg cursor-pointer border-gray2 h-14 hover:-translate-y-1"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default SocialNetwork;
