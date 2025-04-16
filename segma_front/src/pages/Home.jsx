import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import './Home.css';
import RolexWatch from '../assets/images/RolexWatch.png';
import {Link} from 'react-router-dom';
import Watch from '../components/Watch';
import W1 from '../assets/images/W1.png';
import W2 from '../assets/images/W2.png';
import W3 from '../assets/images/W3.png';
import W4 from '../assets/images/W4.png';
import W5 from '../assets/images/W5.png';
import W6 from '../assets/images/W6.png';
import W7 from '../assets/images/W7.png';
import W8 from '../assets/images/W8.png';
import W9 from '../assets/images/W9.png';
import W10 from '../assets/images/W10.png';
import { TweenMax, Power4 } from 'gsap';
import { motion } from 'framer-motion';
import { faBellConcierge, faCrow, faCrown, faDiamond, faGem, faGuaraniSign, faPalette, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Model from './Model';
import Watchbit from '../components/Watchbit';
function Home(props) {
  useEffect(() => {
    // magnetic 
    var magnets = document.querySelectorAll('.magnetic');
magnets.forEach((magnet) => {
  const isHeading = magnet.querySelector('h2');
  const thisStrength = isHeading ? 30 : 50; // Less aggressive for headings

  magnet.addEventListener('mousemove', function (event) {
    moveMagnet(event, thisStrength);
  });

  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 0.5, { x: 0, y: 0, ease: Power4.easeOut });
  });
});

function moveMagnet(event, strength) {
  var magnetButton = event.currentTarget;
  var bounding = magnetButton.getBoundingClientRect();

  TweenMax.to(magnetButton, 0.5, {
    x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
    y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
    ease: Power4.easeOut,
  });
}

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Adjust smoothness
    });

    // Create an animation loop for Lenis
    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Register GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Get all content elements
    const contents = gsap.utils.toArray('#horizontal .content');

    // Dynamically set the width of #horizontal based on the number of content elements
    const horizontal = document.getElementById('horizontal');
    horizontal.style.width = `${100 * contents.length}vw`; // width should be 100vw * number of content items

    // Horizontal scrolling animation
    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1), // Move content horizontally
      ease: 'none',
      scrollTrigger: {
        trigger: '#horizontal', // The section to trigger scrolling
        pin: true, // Pin the section during scrolling
        scrub: 0.3, // Smooth scrolling
        snap: 1 / (contents.length - 1), // Snap to the content
        start: 'top top', // Trigger start point
        end: () => `+=${window.innerWidth * contents.length}`, // Dynamically calculate end point
      },
    });

    // Disable middle mouse button scroll (middle-click drag)
    const disableMiddleClickScroll = (event) => {
      if (event.button === 1) { // Middle mouse button
        event.preventDefault(); // Prevent default middle-click drag behavior
      }
    };

    window.addEventListener('mousedown', disableMiddleClickScroll);

    // Cleanup function to destroy GSAP, Lenis, and remove event listener when the component unmounts
    return () => {
      window.removeEventListener('mousedown', disableMiddleClickScroll); // Remove the event listener
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all GSAP scroll triggers
      lenis.destroy(); // Destroy Lenis smooth scrolling
    };

  }, []); // Empty dependency array to run only once on mount
  const fakeWatchList = [
    {
      name: 'Rolex Submariner',
      img: W1,
      currentBid: '150,000$',
      timeLeft: '2h 30m',
    },
    {
      name: 'Omega Speedmaster',
      img: W2,
      currentBid: '98,500$',
      timeLeft: '1h 15m',
    },
    {
      name: 'Audemars Piguet Royal Oak',
      img: W3,
      currentBid: '220,000$',
      timeLeft: '4h 5m',
    },
    {
      name: 'Patek Philippe Nautilus',
      img: W4,
      currentBid: '310,000$',
      timeLeft: '6h 42m',
    },
    {
      name: 'Tag Heuer Carrera',
      img: W5,
      currentBid: '60,000$',
      timeLeft: '3h 20m',
    },
    {
      name: 'Hublot Big Bang',
      img: W7,
      currentBid: '125,000$',
      timeLeft: '5h 10m',
    },
  ];
  
  const WatchList = [
    {
      img: W1,
      name: "Cellini Moonphase",
      price: "$10,550",
    },
    {
      img: W2,
      name: "Submariner",
      price: "$9,550",
    },
    {
      img: W3,
      name: "GMT-Master II",
      price: "$10,550",
    },
    {
      img: W4,
      name: "Sky-Dweller",
      price: "$14,200",
    },
    {
      img: W5,
      name: "Datejust 41",
      price: "$7,550",
    },
    {
      img: W6,
      name: "Oyster Perpetual",
      price: "$5,000",
    },
    {
      img: W7,
      name: "Datejust 41",
      price: "$7,550",
    },
    {
      img: W8,
      name: "Datejust 41",
      price: "$7,550",
    },
    {
      img: W9,
      name: "Datejust 41",
      price: "$7,550",
    },
    {
      img: W10,
      name: "Datejust 41",
      price: "$7,550",
    },




  ];
  

  return (
    <Layout>
      <>
        <div id="container__horizontal">
          <div className='bg-[#94f95e] h-[200vh] section'></div>


            <div className="bg-[#F5F5F5]  h-[100vh] flex items-center gap-8 justify-center flex-wrap " id='model__section'>         
            <div className="md:max-w-[500px]" id='model__section__second'>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <p className="text-4xl rainbow-text font-bold pb-4">
                          The Rolex Daytona Rainbow Rose Gold
                        </p>
                      </motion.div>
                      <p className='mb-4'>
                        A bold blend of precision and flamboyance. Crafted in Everose gold, it stuns with a bezel set with
                        rainbow-colored sapphires and diamond hour markers. A true collector’s dream, it merges iconic
                        Daytona performance with dazzling, head-turning luxury.
                      </p>

                   
                    <Link to="/model">
                      <div className="magnetic inline-block">
                        <h2 className="text-1xl font-bold mb-4 text-[#C40D2E]  border-[#C40D2E] border-[2px]  p-2 rounded-[10px]">
                          View 3D Model
                        </h2>
                      </div>
                    </Link>
                  </div>
                  
                  
                  <motion.div
                    initial={{ x: 50 , opacity: 0 }}
                    whileInView={{ x: 0 , opacity: 1 }}
                   
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:max-w-[500px] align-center items-center flex flex-col user-select-none"  
                    id='model__section__first'
                  >
                    <img src={RolexWatch} alt="" className=" h-auto w-auto user-select-none " />
                  </motion.div>
                  
            </div>



          <section id="horizontal" className="section">
            <div className="content content_1" >

            <Watch WatchList={WatchList} subtitle="Featured Collections" title="Exclusive" />
            </div>
            <div className="content">
            <Watch WatchList={WatchList} subtitle="Nouveautés" title="New Arrivals" />
            </div>
            <div className="content">
            <Watchbit
  WatchList={fakeWatchList}
  title="Exclusive Auctions"
  subtitle="Limited Edition Watches"
/>
            </div>
          </section>
        </div>
        <section id='features__bottom' className="h-[299px] w-full bg-[#ffffff] flex flex-wrap items-center justify-around">
            <div className='flex flex-col items-center '>
              <FontAwesomeIcon icon={faTruckFast} className='text-[#C40D2E] text-[30px]' />
              <h1 className='text-[20px]'>Livraison Express</h1>
              <p>Livraison gratuite dans le monde entier</p>
            </div>
            <div className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faShieldHalved } className='text-[#C40D2E] text-[30px]' />
              <h1 className='text-[20px]'>Garantie 5 Ans</h1>
              <p>Protection complète de votre investissement</p>
            </div>
            <div className='flex flex-col items-center'>
              <FontAwesomeIcon icon={faCrown} className='text-[#C40D2E] text-[30px]' />
              <h1 className='text-[20px]'>Authenticite Garantie</h1>
              <p>Certificat d'authenticité pour chaque montre</p>
            </div>
            <div className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faBellConcierge} className='text-[#C40D2E] text-[30px]' />
              <h1 className='text-[20px]'>Service VIP</h1>
              <p>Assistance personnalisée 24/7</p>
            </div>
        </section>
      </>
    </Layout>
  );
}

export default Home;

