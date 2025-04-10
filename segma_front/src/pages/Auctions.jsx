import React, { useState } from "react";
import Layout from "../components/Layout";
import auctionImg from "../assets/images/auction.png";
import auctionImg2 from "../assets/images/auction2.jpg";
import Active_showBtn from "../components/Active_showBtn";
import Auction_Show from "../components/Auction_Show";
import auctionSimg from "../assets/images/auction_Simg.png";
import auctionSimg2 from "../assets/images/auction2.jpg";
import Auction_Card from "../components/Auction_Card";

const Auctions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [visibleShow, setvisibleShow] = useState({
  //   first: true,
  //   second: false,
  //   third: false,
  // });

  return (
    <Layout>
      <div className="flex flex-col items-center gap-8 p-8 relative top-10">
        <div className="w-full h-[500px] rounded-lg relative overflow-hidden">
          <div className="h-2.5 w-[52px] flex justify-between items-center bottom-8 left-1/2 -translate-x-1/2 z-40 absolute">
            <Active_showBtn
              active={activeIndex === 0}
              onClick={() => setActiveIndex(0)}
            />
            <Active_showBtn
              active={activeIndex === 1}
              onClick={() => setActiveIndex(1)}
            />
            <Active_showBtn
              active={activeIndex === 2}
              onClick={() => setActiveIndex(2)}
            />
          </div>

          <Auction_Show
            title="Patek Philippe Nautilus"
            cBid={1230}
            tRemainig={{ heure: 12, minute: "05" }}
            auctionImg={auctionImg}
            index={0}
            activeIndex={activeIndex}
          />
          <Auction_Show
            title="Segma Watch"
            cBid={2399}
            tRemainig={{ heure: 12, minute: 45 }}
            auctionImg={auctionImg2}
            index={1}
            activeIndex={activeIndex}
          />
          <Auction_Show
            title="Omega Speedmaster"
            cBid={1230}
            tRemainig={{ heure: 12, minute: "05" }}
            auctionImg={auctionImg}
            index={2}
            activeIndex={activeIndex}
          />
        </div>
        <div className=" w-full h-full mb-6 flex flex-wrap lg:flex-nowrap justify-center gap-8 ">
          <div className="h-5/6 w-[256px] md:w-1/5 p-6 bg-white rounded-lg shadow-md ">
            <h3 className=" text-[18px] font-bold mb-4">Filters</h3>
            <div className="flex flex-col  gap-4 ">
              <div className="flex  flex-col items-center gap-2.5">
                <h4 className="w-full text-[16px] font-semibold ">Brands</h4>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full h-[20px] flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] rounded-sm border border-[#D1D5DB] "
                      style={{
                        accentColor: "#C40D2E",
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label className="h-[16px] flex items-center " htmlFor="">
                      Rolex
                    </label>
                  </div>
                  <div className="w-full h-[20px] flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] rounded-sm border border-[#D1D5DB] "
                      style={{
                        accentColor: "#C40D2E",
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label className="h-[16px] flex items-center" htmlFor="">
                      Patek Phillipe
                    </label>
                  </div>
                  <div className="w-full h-[20px] flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] rounded-sm border border-[#D1D5DB] "
                      style={{
                        accentColor: "#C40D2E",
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label className="h-[16px] flex items-center" htmlFor="">
                      Audemars Peguet
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col items-center gap-2.5">
                <h4 className="w-full text-[16px] font-semibold ">
                  Price Range
                </h4>
                <div className="w-full flex flex-col gap-2">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    className="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer range-thumb:bg-[#C40D2E]"
                    style={{
                      accentColor: "#C40D2E",
                    }}
                  />

                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">$0</span>
                    <span className="text-[#6B7280]"> $500,000+</span>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col items-center gap-2.5">
                <h4 className="w-full text-[16px] font-semibold ">condition</h4>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full h-[20px] flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] rounded-sm border border-[#D1D5DB] "
                      style={{
                        accentColor: "#C40D2E",
                      }}
                      type="radio"
                      name="new"
                      id=""
                    />
                    <label className="h-[16px] flex items-center " htmlFor="">
                      new
                    </label>
                  </div>
                  <div className="w-full h-[20px] flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] rounded-sm border border-[#D1D5DB] "
                      style={{
                        accentColor: "#C40D2E",
                      }}
                      type="radio"
                      name="new"
                      id=""
                    />
                    <label className="h-[16px] flex items-center " htmlFor="">
                      PreOwned
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/5  flex flex-col gap-4">
            <div className="flex gap-2">
              <label
                className="h-full flex items-center text-[16px] text-[#4B5563] "
                htmlFor="sorting">
                sort by:
              </label>
              <select
                className="w-[130px] h-[38px] bg-white rounded-md border border-[#D1D5DB]"
                name=""
                id="">
                <option value="" selected>
                  latest
                </option>
              </select>
            </div>
            <div className="h-full flex justify-between items-center  flex-wrap gap-2">
              <Auction_Card
                imgAuction={auctionSimg}
                titleAuction="Rolex Submariner"
                CBid={23.456}
                Time={{ heure: "12", minute: "20" }}
                NBids={12}
                Verified={true}
              />
              <Auction_Card
                imgAuction={auctionSimg}
                titleAuction="Rolex Submariner"
                CBid={23.456}
                Time={{ heure: "12", minute: "20" }}
                NBids={12}
                Verified={true}
              />
              <Auction_Card
                imgAuction={auctionSimg}
                titleAuction="Rolex Submariner"
                CBid={23.456}
                Time={{ heure: "12", minute: "20" }}
                NBids={12}
              />
              <Auction_Card
                imgAuction={auctionSimg}
                titleAuction="Rolex Submariner"
                CBid={23.456}
                Time={{ heure: "12", minute: "20" }}
                NBids={12}
                Verified={true}
              />
               <Auction_Card
                imgAuction={auctionSimg2}
                titleAuction="Rolex Submariner"
                CBid={23.456}
                Time={{ heure: "12", minute: "20" }}
                NBids={12}
                Verified={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auctions;
