import React from "react";

const SocialNetwork = ({ icon }) => {
  return (
    <div className="flex items-center justify-center bg-white border rounded-lg border-gray2 h-11">
      {icon}
    </div>
  );
};

export default SocialNetwork;
