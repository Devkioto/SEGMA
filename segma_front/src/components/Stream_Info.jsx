import React from "react";

const Stream_Info = ({infoKey , infoValue}) => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="flex flex-col gap-1.5">
        <p className="w-full text-[#6B7280]">{infoKey}</p>
        <p className="w-full text-xl font-semibold ">{infoValue}</p>
      </div>
    </div>
  );
};

export default Stream_Info;
