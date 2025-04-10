import React from "react";

const Auction_Show = ({
  title,
  cBid,
  tRemainig,
  auctionImg,
  index,
  activeIndex,
}) => {
  const offset = index - activeIndex;

  return (
    <div
      className={`absolute top-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
        offset === 0
          ? "translate-x-0 z-20 opacity-100"
          : offset < 0
          ? "-translate-x-full z-10 opacity-0"
          : "translate-x-full z-10 opacity-0"
      }`}>
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center brightness-50"
          src={auctionImg}
          alt=""
        />
      </div>

      <div className="h-1/2 md:h-1/3 md:w-[442px] m-8 flex flex-col justify-between text-white z-10 relative">
        <h2 className=" text-4xl text-warp font-bold">{title}</h2>
        <div className="flex gap-2">
          <div>
            <span className="text-[#D1D5DB]">current bid</span>
            <p className="text-[24px] font-bold">${cBid}</p>
          </div>
          <div>
            <span className="text-[#D1D5DB]">time remaining</span>
            <p className="text-[24px] font-bold">
              {tRemainig.heure}h {tRemainig.minute}m
            </p>
          </div>
        </div>
        <button
          className="w-[151px] h-[48px] bg-[#C40D2E] rounded-sm text-[16px] font-semibold text-center align-middle"
          type="button">
          Place Bid Now
        </button>
      </div>
    </div>
  );
};

export default Auction_Show;
