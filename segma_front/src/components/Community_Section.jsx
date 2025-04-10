import React from "react";
import { motion } from "framer-motion";

const Community_Section = ({ sectionTitle, sectionDescription, children }) => {
  return (
    <motion.div
      className="min-h-[312px] w-full flex flex-col gap-4 items-center my-4"
      className="min-h-[312px] w-full flex flex-col gap-4 items-center justify-around my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="min-h-[84px] w-6/7 flex flex-col items-center">
        <h2 className="text-[36px] font-semibold text-[#CD402E] text-center">
          {sectionTitle}
        </h2>
        <p className="text-[20px] text-[#6B7280] text-center">
          {sectionDescription}
        </p>
      </div>
      <div className="w-6/7 flex flex-wrap justify-center items-center gap-8">
        {children}
      </div>
    </motion.div>
  );
};

export default Community_Section;
