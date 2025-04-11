import React from "react";
import Layout from "../components/Layout";
import Stream_Info from "../components/Stream_Info";
import userImg from "../assets/images/pers.png";
import Stream_Message from "../components/Stream_Message";

const Stream = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-8 p-8 relative top-10">
        <div className="w-full  flex flex-wrap rounded-lg overflow-hidden shadow-lg">
          <div className="w-full lg:w-2/3 ">
            <iframe
              className="aspect-video  w-full h-full"
              src="https://www.youtube.com/embed/kn7CLPPlPzM?start=539"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="w-full lg:w-1/3 bg-white p-6 flex flex-col  gap-2">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-2xl font-bold ">live: Philibs...</h2>
              <span className="h-[28px] px-3 py-1 rounded-full bg-red-300 text-[#C40D2E] font-semibold flex items-center justify-center">
                LIVE
              </span>
            </div>
            <Stream_Info infoKey={"Current Bid"} infoValue={"$185,000"} />
            <Stream_Info infoKey={"Total Bids"} infoValue={"47"} />
            <Stream_Info infoKey={"Time Left"} infoValue={"12:45"} />
            <div className="w-full  flex flex-col md:flex-row  items-center gap-1.5">
              <input
                className="w-full grow h-[42px] ps-4 bg-white  text-md text-[#6B7280] rounded-sm border-[2px] border-[#D1D5DB] focus:outline-none focus:border-[#C40D2E]"
                type="text"
                placeholder="Enter bid amount"
              />
              <button
                className="w-full md:w-[120px] h-[42px] flex-none rounded-sm px-6 py-2 bg-[#C40D2E] text-[16px] text-white font-semibold cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-[#C40D2E]"
                type="button">
                Place Bid
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  mb-6 flex flex-col gap-3 ">
          <h3 className="text-[20px] font-semibold gap-2">live chat</h3>
          <div className="w-full h-[300px] flex flex-col gap-2.5 p-4 overflow-hidden rounded-lg bg-white shadow-xl overflow-y-auto ">
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
            <Stream_Message img={userImg} />
          </div>
          <div className="w-full h-[42px] flex items-center gap-1.5">
            <input
              className="grow h-full ps-4 bg-white shadow-xl text-md text-[#6B7280] rounded-sm border-[2px] border-[#D1D5DB] focus:outline-none focus:border-[#C40D2E]"
              type="text"
              placeholder="Type your message..."
            />
            <button
              className="w-[84px] h-full rounded-sm px-6 py-2 bg-[#C40D2E] text-[16px] text-white font-semibold "
              type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
