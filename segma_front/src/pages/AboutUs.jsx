import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import segmaLogo from "../assets/images/segma_logo.png";


const AboutUs = () => {
  const fullText = `Welcome to SEGMA, a curated platform for passionate collectors and luxury watch enthusiasts. We specialize in offering a selection of rare timepieces, iconic classics, and modern masterpieces — whether you're looking to buy, sell, or participate in exclusive auctions. At SEGMA, every watch tells a story. We bring together a global community of individuals who appreciate craftsmanship, rarity, and timeless design.`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="h-full mt-16">
        <h1 className="text-2xl mt-20 font-bold text-[#C40D2E] text-center">
          WE ARE GLAD TO MEET!
        </h1>

        <section className="h-dvh relative flex items-center justify-between px-8 py-2 bg-gray-50 overflow-hidden">
       
          {/* Animated Text Content */}
          <motion.div
            className="z-10 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className="text-4xl font-bold text-[#C40D2E] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Spinning Logo */}
          <motion.img
            src={segmaLogo}
            alt="Spinning Logo"
            className="absolute w-[500px] sm:w-[400px] md:w-[450px] lg:w-[500px] right-[-140px] top-1/3 pointer-events-none hidden sm:block"
            style={{ transform: "translateY(-33.33%)" }}
            initial={{ opacity: 0.3, rotate: 0 }}
            animate={{ opacity: 0.9, rotate: 360 }}
            transition={{
              opacity: { duration: 2, ease: "easeOut" },
              rotate: { repeat: Infinity, duration: 60, ease: "linear" },
            }}
          />
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
