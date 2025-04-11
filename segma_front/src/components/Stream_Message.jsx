import React from "react";

const Stream_Message = ({ img }) => {
  return (
    <div className="w-full  flex items-center gap-2">
      <div className="w-[32px] h-[32px] overflow-hidden rounded-full ">
        <img
          className=" w-full h-full inset-0 object-cover object-center"
          src={img}
          alt=""
        />
      </div>
      <div className="grow h-full flex flex-col items-start ">
        <p className="font-semibold">hamza EL</p>
        <p className="text-[#4B5563]">Amazing price</p>
      </div>
    </div>
  );
};

export default Stream_Message;
