import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
  faUser,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Header.css";
import segma_logo from "../assets/images/segma_logo.png";
import Header_Link from "./Header_Link";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const sidebarRef = useRef(null);
  const scrollTimeout = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [isSidebarOpen]);

  //! Handle navbar visibility on scroll and hide after inactivity
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Show or hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up or top
      }

      // Always show when scrolled to top
      if (currentScrollY === 0) {
        setShowNavbar(true);
      }

      // Start timeout to auto-hide after 5 seconds of inactivity
      if (currentScrollY > 0) {
        scrollTimeout.current = setTimeout(() => {
          setShowNavbar(false);
        }, 5000);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {/*//! Header */}
      <motion.div
        id="header"
        className="h-14 bg-white shadow-md fixed w-full top-0 z-50 px-5 flex items-center justify-between "
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.5 }}>
        {/* Left Side */}
        <div className="flex items-center gap-4 mr-2 ">
          <motion.button
            className="text-[#C40D2E] text-xl cursor-pointer"
            onClick={toggleSidebar}>
            <motion.div
              animate={{
                rotate: isSidebarOpen ? 180 : 0,
                scale: isSidebarOpen ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}>
              <FontAwesomeIcon
                className="w-6 h-6"
                icon={isSidebarOpen ? "" : faBars}
              />
            </motion.div>
          </motion.button>

          <button className="text-[#C40D2E] text-xl cursor-pointer">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
        </div>

        {/* Center Nav */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex gap-6 text-[#C40D2E] text-sm font-semibold items-center">
          <Header_Link children="About Us" linkTo="/about_us" />
          <Header_Link children="Catalogue" linkTo="/catalogue" />
          <Header_Link linkTo="/">
            <img className="h-8" src={segma_logo} alt="Logo" />
          </Header_Link>
          <Header_Link children="Auctions" linkTo="/auctions" />
          <Header_Link children="Community" linkTo="/community" />
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 pr-4">
          <div className="relative w-full md:w-40">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full w-full px-4 py-2 text-sm border-[#C40D2E] focus:outline-none focus:ring-2 focus:ring-[#C40D2E] pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C40D2E] cursor-pointer">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <button className="text-[#C40D2E] cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="text-[#C40D2E] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </motion.div>

      {/*//! Overlay & Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              style={{
                backgroundColor: "#00000054",
                bottom: "-69.5781px",
                boxSizing: "border-box",
                left: "0px",
                position: "fixed",
                right: "0px",
                top: "60px",
                transition:
                  "opacity 0.3s cubic-bezier(0.39, 0.575, 0.565, 1), height, visibility, z-index",
                userSelect: "none",
                zIndex: 960,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              ref={sidebarRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="w-full h-screen sm:w-85 bg-white fixed z-960 top-14 p-6 shadow-md">
              <div className="flex justify-end">
                <button
                  onClick={toggleSidebar}
                  className="text-[#C40D2E] text-2xl cursor-pointer">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">
                    Getting Started
                  </h2>
                  <div className="flex flex-col space-y-1">
                    {[
                      "Installation",
                      "Plugins",
                      "Migrations",
                      "Appearance",
                      "Mamba UI",
                    ].map((item, i) => (
                      <motion.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}>
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">
                    Dashboard
                  </h2>
                  <div className="flex flex-col space-y-1">
                    <motion.a
                      href="#"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}>
                      Header
                    </motion.a>
                  </div>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
