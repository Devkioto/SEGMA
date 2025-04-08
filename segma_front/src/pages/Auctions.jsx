import React from "react";
import Layout from "../components/Layout";
import auctionImg from "../assets/images/auction.png";

const Auctions = () => {
  return (
    <Layout>
      <div className="h-[1130px] flex flex-col items-center gap-8 p-8 relative top-10">
        <div className="w-full  h-[500px] rounded-lg overflow-hidden relative">
          <div className="bg-amber-400 z-40 absolute">buttons</div>
          <div className="h-full w-full flex  items-end">
            <div className="h-1/3 w-[442px] m-8 flex flex-col justify-between text-white z-90">
              <h2 className=" text-4xl font-bold">Patek Philippe Nautilus</h2>
              <div className="flex gap-2">
                <div>
                  <span className="text-[#D1D5DB]">current bid</span>
                  <p className="text-[24px] font-bold">$1230</p>
                </div>
                <div>
                  <span className="text-[#D1D5DB]">time reamining</span>
                  <p className="text-[24px] font-bold">12h 05m</p>
                </div>
              </div>
              <button
                className="w-[151px] h-[48px] bg-[#C40D2E] rounded-sm text-[16px] font-semibold text-center align-middle "
                type="button">
                Place Bid Now
              </button>
            </div>
            <div className="absolute inset-0">
              <img
                className="w-full h-full  object-cover object-center brightness-50 "
                src={auctionImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[1376px] h-[518px]">list auctions</div>
      </div>
    </Layout>
  );
};

export default Auctions;
