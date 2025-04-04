import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faGlobe, faSearch, faShoppingCart, faUser, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import "../components/Header.css";

function Header(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div id='header' className="col-span-8 h-15 bg-[#FFFFFF] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] flex justify-between items-center">
        {/*//? sidebar & language */}
        <div id="sidebar" className="flex items-center gap-4">
          <button id="sidebar-button" className="text-[#C40D2E] text-xl" onClick={toggleSidebar}>
            <FontAwesomeIcon className="w-6 h-6" icon={isSidebarOpen ? faTimes : faBars} />
          </button>
          <button className="text-[#C40D2E] text-xl"><FontAwesomeIcon icon={faLanguage} /></button>
        </div>

        <ul id="nav" className="hidden md:flex gap-6 text-[#C40D2E] text-sm font-semibold">
          <li><a href="#" className="hover:underline"><p>About Us</p></a></li>
          <li><a href="#" className="hover:underline"><p>Catalogue</p></a></li>
          <li><p><img src="logo.png" alt="Logo" /></p></li>
          <li><a href="#" className="hover:underline"><p>Auctions</p></a></li>
          <li><a href="#" className="hover:underline"><p>Community</p></a></li>
        </ul>

        {/*//? searchinput */}
        <div className="flex items-center gap-4" id="search">
            <div className="relative w-full md:w-40 " >
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full w-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#C40D2E] pr-10"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C40D2E] pointer-events-none">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <button className="text-[#C40D2E]"><FontAwesomeIcon icon={faShoppingCart} /></button>
            <button className="text-[#C40D2E]"><FontAwesomeIcon icon={faUser} /></button>
        </div>
      </div>

      <AnimatePresence> {/*//? Wrap the sidebar with AnimatePresence */}
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800 absolute z-50 top-15"
          >
            <nav className="space-y-8 text-sm">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"><p>Getting Started</p></h2>
                <div className="flex flex-col space-y-1">
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p>Installation</p>
                  </motion.a>
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <p>Plugins</p>
                  </motion.a>
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <p>Migrations</p>
                  </motion.a>
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <p>Appearance</p>
                  </motion.a>
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <p>Mamba UI</p>
                  </motion.a>
                </div>
              </div>

              {/* Repeat for other sections */}
              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"><p>Dashboard</p></h2>
                <div className="flex flex-col space-y-1">
                  <motion.a
                    rel="noopener noreferrer"
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <p>Header</p>
                  </motion.a>
                  {/* More links with animation */}
                </div>
              </div>
              {/* Add other sections here */}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
