import React from "react";

const Active_showBtn = ({ active, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`h-2.5 w-2.5 rounded-[4.5px] cursor-pointer transition-colors duration-300 ${
          active ? "bg-gray-300" : "bg-gray-500"
        }`}
        type="button"
      ></button>
    );
  };
  
export default Active_showBtn;
