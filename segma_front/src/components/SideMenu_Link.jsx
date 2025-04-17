import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SideMenu_Link = ({ linkName, linkTo, linkKey }) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      key={linkKey}
      to={linkTo}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="hover:text-[#C40D2E] hover:transition-colors">
      {linkName}
    </MotionLink>
  );
};

export default SideMenu_Link;
