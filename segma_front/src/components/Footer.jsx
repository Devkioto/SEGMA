import React from "react";
import segma_logo from "../assets/images/segma_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer_LinkSection from "./Footer_LinkSection";
function Footer() {
  return (
    <div className=" col-span-8 row-start-5 h-(--footer-height) flex flex-col px-[32px] bg-[#E5E7EB] text-[#C40D2E] flex items-center justify-center">
      <div className="h-[224px]  flex  w-full gap-4 items-center">
        <div className="w-full md:w-1/3 grid grid-rows-3">
          <div className="w-[66px] ml-4  place-items-center flex flex-col content-end">
            <img
              className="h-1/2 aspect-square object-fit position-center"
              src={segma_logo}
              alt="segma_logo"
            />
            <span className="h-1/3 font-bold font-(family-name:--site-font)">
              SEGMA
            </span>
          </div>
          <p className="self-center text-wrap leading-7  font-(family-name:--site-font)">
            Discover the world's finest timepieces at Segma. Your destination
            for luxury watches and rare collectibles.
          </p>
          <div className="self-center flex gap-6 ">
            <a href="https://web.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.x.com">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3  grid grid-cols-4 ">
          <Footer_LinkSection
            sectionHead="shop"
            links={[
              <a href="">Collections</a>,
              <a href="">New Arrivals</a>,
              <a href="">Auctions</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="support"
            links={[
              <a href="">Contact</a>,
              <a href="">Shipping</a>,
              <a href="">Returns</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="company"
            links={[
              <a href="">About</a>,
              <a href="">Blog</a>,
              <a href="">Careers</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="legal"
            links={[
              <a href="">Privacy</a>,
              <a href="">Terms</a>,
            ]}
          />
        </div>
      </div>
      <div className="h-[73px] flex items-center ">
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="w-[217px] h-[42px] rounded-l-sm bg-white text-gray-500 pl-2 border-2 border-r-0 border-gray-400  focus:border-[#C40D2E] focus:outline-hidden"
          />
          <button
            type="submit"
            className="w-[102px] h-[42px] bg-[#C40D2E] cursor-pointer text-white">
            Subscribe
          </button>
        </form>
      </div>
      <div className="h-[57px] text-[#8E1128] font-semibold  w-full flex items-center justify-center border-t-2 border-gray-300 ">
        ©2024 Segma, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;