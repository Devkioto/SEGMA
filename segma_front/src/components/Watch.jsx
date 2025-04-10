import React, { useEffect, useState } from 'react';

function Watch({ WatchList }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkScreenSize(); // check initially
    window.addEventListener('resize', checkScreenSize); // listen to resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Limit to 6 watches on mobile
  const displayedWatches = isMobile ? WatchList.slice(0, 7) : WatchList;

  return (
    <>
      <div id='Watch__exclusive' className='flex flex-wrap justify-start gap-4 content-center'>
        <div>
          <p>Featured Collections</p>
          <h1>Exclusive Timepieces</h1>
        </div>

        {displayedWatches.map((item, index) => (
          <div className='cursor-pointer' key={index}>
            <img src={item.img} className='w-58' />
            <p className='text-lg text-gray-600 text-center'>{item.name}</p>
            <p className='text-gray-600 text-lg text-center'>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Watch;
