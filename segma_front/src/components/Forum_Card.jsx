import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Forum_Card = ({ icon, title, description }) => {
  return (
    <div className="w-[280px] h-[92px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex items-center justify-around gap-4">
      <div className="text-[27px]">
        <FontAwesomeIcon icon={icon} />
        </div>

      <div className="w-2/3 flex flex-col  items-start justify-center gap-1">
        <h3 className="text-[18px] text-[#111827] font-semibold">{title}</h3>
        <p className="text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
};

export default Forum_Card;
