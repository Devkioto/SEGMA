import React from "react";
import { motion } from "framer-motion";

const Event_Card = ({ date, place, title, description }) => {
  return (
    <motion.div
      className="h-[244px] w-[384px] mb-6 flex flex-col items-center justify-center gap-4 bg-white shadow-lg rounded-lg p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="w-[336px] h-[40px] flex justify-between items-center">
        <span className="h-[40px] w-[87px] rounded-lg bg-gray-300 text-[16px] font-bold flex items-center justify-center">
          {date}
        </span>
        <span className="h-[24px] text-[16px] text-[#6B7280]">{place}</span>
      </div>
      <h3 className="w-[336px] h-[28px] text-[18px] font-semibold">{title}</h3>
      <p className="w-[336px] h-[48px] text-[16px] text-[#6B7280]">
        {description}
      </p>
      <button
        className="w-[336px] h-[40px] bg-[#C40D2E] rounded-sm text-white  cursor-pointer hover:shadow-cm transition-shadow duration-300 ease-in-out"
        type="button">
        S'inscrire
      </button>
    </motion.div>
  );
};

export default Event_Card;

