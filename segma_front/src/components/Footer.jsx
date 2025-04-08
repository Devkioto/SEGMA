import React from "react";
import segma_logo from "../assets/images/segma_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer_LinkSection from "./Footer_LinkSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

function Footer() {
  return (
    <motion.div
      className="h-[400px]  pl-[92px] pr-[92px] md:h-[370px] col-span-8 row-start-5 flex flex-col px-[32px] bg-[#E5E7EB] text-[#C40D2E] font-site-font items-center justify-center" // Changed font and height
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
      
    >
      <div className="h-full md:h-[224px] flex flex-wrap md:flex-nowrap w-full gap-4 items-center">
        <motion.div className="w-full md:w-1/3 grid grid-rows-auto gap-4" variants={fadeUp}>
          <div className="w-[66px] ml-4 flex flex-col items-center self-end">
            <img
              className="w-1/2 aspect-square object-contain"
              src={segma_logo}
              alt="segma_logo"
            />
            <span className="h-1/3 font-bold">SEGMA</span>
          </div>

          <p className="self-center text-wrap leading-7">
            Discover the world's finest timepieces at Segma. Your destination
            for luxury watches and rare collectibles.
          </p>

          <div className="self-center flex gap-6">
            <a href="https://web.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="https://www.x.com" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Footer Links Section with stagger */}
        <motion.div className="w-full md:w-2/3 grid grid-cols-4" variants={container}>
          {[
            ["shop", ["Collections", "New Arrivals", "Auctions"]],
            ["support", ["Contact", "Shipping", "Returns"]],
            ["company", ["About", "Blog", "Careers"]],
            ["legal", ["Privacy", "Terms"]],
          ].map(([head, links], i) => (
            <motion.div key={i} variants={fadeUp}>
              <Footer_LinkSection
                sectionHead={head}
                links={links.map((text, j) => (
                  <a href="#" key={j} target="_blank">{text}</a>
                ))}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Newsletter */}
      <motion.div
        className="w-1/2 h-[73px] flex items-center justify-center "
        variants={fadeUp}
      >
        <form action="" className="min-w-[240px] lg:min-w-[300px]">
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

      {/* Copyright */}
      <motion.div
        className="h-[50px] z-100  text-[#8E1128] font-medium w-full flex items-center justify-center border-t-2 border-gray-300"
      >
        ©2024 Segma, Inc. All rights reserved.
      </motion.div>
    </motion.div>
  );
}

export default Footer;
