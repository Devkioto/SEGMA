import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"; // ✅ Import motion

const Galerie_Card = ({
  watchImg,
  ownerImg,
  title,
  ownerName,
  numLikes,
  numComments,
}) => {
  return (
    <motion.div
      className="h-[328px] w-[384px] rounded-lg bg-white[#F2F3F6] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center gap-4 relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}        // Start hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }}     // Animate in when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}              // Animate only once
      
    >
      <img
        className="w-full h-[192px] rounded-t-lg object-cover"
        src={watchImg}
        alt="watch image"
      />
      <div className="h-[136px] ps-4 flex flex-col items-center justify-center gap-4">
        <div className="w-[336px] h-[48px] flex items-center overflow-hidden gap-4">
          <img className="aspect-square w-[45px]" src={ownerImg} alt="" />
          <div className="h-[48px]">
            <h3 className="text-[18px] font-semibold">{title}</h3>
            <p className="text-[#6B7280]">{`Par ${ownerName}`}</p>
          </div>
        </div>
        <div className="w-[336px] h-[24px] flex items-center gap-4">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon className="text-[18px]" icon={faHeart} />
            <span className="text-[16px]">{numLikes}</span>
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon className="text-[18px]" icon={faComment} />
            <span className="text-[16px]">{numComments}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Galerie_Card;
