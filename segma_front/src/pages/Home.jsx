import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import './Home.css';
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
import W11 from '../assets/images/W11.png';


function Home(props) {
  useEffect(() => {
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
      name: "Day-Date 40",
      price: "$12,900",
    },
    {
      img: W8,
      name: "Sea-Dweller",
      price: "$11,350",
    },
    {
      img: W9,
      name: "Yacht-Master",
      price: "$11,150",
    },
    {
      img: W10,
      name: "Explorer II",
      price: "$8,350",
    },

  ];
  return (
    <Layout>
      <>
        <div id="container__horizontal">
          <div className="bg-[#1765ff] h-[100vh] section">section 1</div>
          <div className="bg-[#ff1717] h-[100vh] section">section 2</div>
          <div className="bg-[#00ff00] h-[100vh] section">section 3</div>

          <section id="horizontal" className="section">
            <div className="content">
              <p>Featured Collections</p>
              <h1>Exclusive Timepieces</h1>
              <Watch WatchList={WatchList}  />
            </div>
            <div className="content">
              <p>Content 2</p>
            </div>
            <div className="content">
              <p>Content 3</p>
            </div>
          </section>
        </div>
        <section className="h-[100vh] w-full bg-[#FACC15]">
          <h1>Home</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ex praesentium maxime eligendi reprehenderit ea. Ea nihil ipsa molestiae quam doloribus placeat distinctio optio sint ducimus magni nesciunt, quos eum?</p>
        </section>
      </>
    </Layout>
  );
}

export default Home;
