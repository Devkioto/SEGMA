import React from "react";
import segma_logo from "../assets/images/segma_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer_LinkSection from "./Footer_LinkSection";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className="h-[500px] md:h-(--footer-height) col-span-8 row-start-5 flex flex-col px-[32px] bg-[#E5E7EB] text-[#C40D2E] items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full   md:h-[224px] flex flex-wrap md:flex-nowrap w-full gap-4 items-center justify-end
      ">
        <div className="w-full md:w-1/3 grid grid-rows-auto gap-4 ">
          {/* Logo Section */}
          <motion.div
            className="  w-[66px] ml-4 flex flex-col items-center self-end "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            
            <img
              className="w-1/2 aspect-square object-contain mt-2 mr-10"
              src={segma_logo}
              alt="segma_logo"
            />
            <span
              className="h-1/3 font-bold mr-10 "
              style={{ fontFamily: "var(--site-font)" }}
            >
              SEGMA
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="self-center text-wrap leading-7"
            style={{ fontFamily: "var(--site-font)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discover the world's finest timepieces at Segma. Your destination
            for luxury watches and rare collectibles.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="self-center flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="https://web.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="https://www.x.com" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
            </a>
          </motion.div>
        </div>

        {/* Footer Links Section */}
        <div className="w-full md:w-2/3 grid grid-cols-4 ">
          <Footer_LinkSection
            sectionHead="shop"
            links={[
              <a href="" target="_blank">Collections</a>,
              <a href="" target="_blank">New Arrivals</a>,
              <a href="" target="_blank">Auctions</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="support"
            links={[
              <a href="" target="_blank">Contact</a>,
              <a href="" target="_blank">Shipping</a>,
              <a href="" target="_blank">Returns</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="company"
            links={[
              <a href="" target="_blank">About</a>,
              <a href="" target="_blank">Blog</a>,
              <a href="" target="_blank">Careers</a>,
            ]}
          />
          <Footer_LinkSection
            sectionHead="legal"
            links={[
              <a href="" target="_blank">Privacy</a>,
              <a href="" target="_blank">Terms</a>,
            ]}
          />
        </div>
      </div>

      {/* Newsletter Subscription */}
      <motion.div
        className="h-[73px] flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <form action="">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 h-[42px] rounded-l-sm bg-white text-gray-500 pl-2 border-2 border-r-0 border-gray-400 focus:border-[#C40D2E] focus:outline-none"
          />
          <button
            type="submit"
            className="w-1/3 h-[42px] bg-[#C40D2E] cursor-pointer text-white"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="h-[57px] text-[#8E1128] font-semibold w-full flex items-center justify-center border-t-2 border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        ©2024 Segma, Inc. All rights reserved.
      </motion.div>
    </motion.div>
  );
}

export default Footer;
