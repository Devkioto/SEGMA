import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Watch({ WatchList, title, subtitle }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const displayedWatches = isMobile ? WatchList.slice(0, 6) : WatchList;

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      id="Watch__exclusive"
      className="py-5 grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full"
    >
      {(title || subtitle) && (
        <motion.div
          className="col-span-2 justify-self-center"
          id="text__exclusive__watch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          {subtitle && <p className="text-[20px] ml-10">{subtitle}</p>}
          {title && (
            <h1 className="justify-self-center ml-10">
              <p className="text__title">{title}</p>
              <p>Timepieces</p>
            </h1>
          )}
        </motion.div>
      )}

      {displayedWatches.map((item, index) => (
 <motion.div
 className="cursor-pointer w-[190px] justify-self-center group" // added group
 key={index}
 id="exclusive__watch__card"
 custom={index}
 variants={fadeInUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.3 }}
>
 <img
   src={item.img}
   className="w-auto h-auto transition duration-300 ease-in-out group-hover:scale-110" // group-hover added
   alt={item.name}
 />
 <br />
 <p className="text-lg font-semibold text-gray-600 text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
   {item.name}
 </p>
 <p className="text-gray-600 text-lg text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
   {item.price}
 </p>
</motion.div>

      ))}
    </motion.div>
  );
}

export default Watch;
