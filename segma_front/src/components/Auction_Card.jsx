import React from "react";

const Auction_Card = ({
  imgAuction,
  titleAuction,
  CBid,
  Time = { heure: "00", minute: "00" },
  NBids,
  Verified = false,
}) => {
  return (
    <div className="h-[432px] w-full md:w-[270px] flex flex-col justify-between bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="w-full h-[192px]">
        <img
          className=" w-full h-full inset-0 object-cover object-center"
          src={imgAuction}
          alt=""
        />
      </div>
      <div className="w-full  flex flex-col items-center justify-between p-4 ">
        <div className="w-full h-[28px] mb-1.5 flex items-center gap-2">
          <h3 className="text-[18px] font-bold">{titleAuction}</h3>
          <span
            className={` h-full flex-none flex items-center justify-center px-2 py-1 ${
              Verified
                ? "bg-[#DCFCE7]  text-[#166534]"
                : "bg-[#fcdcdc]  text-[#651616]"
            } rounded-sm  font-medium tracking-wide`}>
            {Verified ? "Verified" : "Unverified"}
          </span>
        </div>
        <div className="w-full h-[148px] flex flex-col items-center justify-around">
          <div className="w-full h-[20px] flex justify-between ">
            <span className="text-[#6B7280]">Current Bid</span>
            <span className="font-semibold ">${CBid}</span>
          </div>
          <div className="w-full h-[20px] flex justify-between ">
            <span className="text-[#6B7280]">Time Left</span>
            <span className="font-semibold ">{`${Time.heure}h ${Time.minute}m`}</span>
          </div>
          <div className="w-full h-[20px] flex justify-between ">
            <span className="text-[#6B7280]">Bids</span>
            <span className="font-semibold ">{NBids}</span>
          </div>
          <button
            className="w-[206px] h-[40px] mx-auto rounded-sm bg-[#C40D2E] text-white text-[16px] font-meduim"
            type="button">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction_Card;
