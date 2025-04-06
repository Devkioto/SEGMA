import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faGlobe,
  faSearch,
  faShoppingCart,
  faUser,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Header.css";
import segma_logo from "../assets/images/segma_logo.png";

function Header(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scroll Down → Hide navbar
      } else {
        setShowNavbar(true); // Scroll Up → Show navbar
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        id="header"
        className="col-span-8 h-15 bg-[#FFFFFF] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] flex justify-between items-center fixed w-full top-0 z-50 px-4"
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        {/* Sidebar & Language */}
        <div id="sidebar" className="flex items-center gap-4">
          <motion.button
            id="sidebar-button"
            className="text-[#C40D2E] text-xl cursor-pointer"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                rotate: isSidebarOpen ? 180 : 0,
                scale: isSidebarOpen ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                className="w-6 h-6"
                icon={isSidebarOpen ? faTimes : faBars}
              />
            </motion.div>
          </motion.button>

          <button className="text-[#C40D2E] text-xl cursor-pointer">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
        </div>

        {/* Navigation */}
        <ul className="hidden items-center md:flex gap-6 text-[#C40D2E] text-sm font-semibold">
          <li>
            <a href="#" className="hover:underline">
              <p>About Us</p>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <p>Catalogue</p>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <img className="h-8" src={segma_logo} alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <p>Auctions</p>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <p>Community</p>
            </a>
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center gap-4" id="search">
          <div className="relative w-full md:w-40 select-none">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C40D2E] pr-10"
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

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800 fixed z-50 top-15"
          >
            <nav className="space-y-8 text-sm">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                  <p>Getting Started</p>
                </h2>
                <div className="flex flex-col space-y-1">
                  {["Installation", "Plugins", "Migrations", "Appearance", "Mamba UI"].map((item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                    >
                      <p>{item}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                  <p>Dashboard</p>
                </h2>
                <div className="flex flex-col space-y-1">
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <p>Header</p>
                  </motion.a>
                </div>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
