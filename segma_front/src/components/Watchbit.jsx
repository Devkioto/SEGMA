import React from 'react';
import { motion } from 'framer-motion';

function Watchbit({ WatchList, title, subtitle }) {
  return (
    <motion.div className='w-full flex flex-wrap '>
      {/* {(title || subtitle) && (
        <motion.div>
          {subtitle && <p>{subtitle}</p>}
          {title && <h1><p>{title}</p></h1>}
        </motion.div>
      )}
      {WatchList.map((item, index) => (
        <motion.div key={index}>
          <p>{item.name}</p>
          <p>Current Bid: {item.currentBid || 'Unknown'}</p>
          <p>Time Left: {item.timeLeft || 'Unknown'}</p>
        </motion.div>
      ))} */}
    </motion.div>
  );
}

export default Watchbit;

