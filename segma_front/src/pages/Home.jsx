import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import "./Home.css";

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
        const contents = gsap.utils.toArray("#horizontal .content");

        // Dynamically set the width of #horizontal based on number of content elements
        const horizontal = document.getElementById('horizontal');
        horizontal.style.width = `${100 * contents.length}vw`; // width should be 100vw * number of content items



        // Horizontal scrolling animation
        gsap.to(contents, {
            xPercent: -100 * (contents.length - 1), // Move content horizontally
            ease: "none",
            scrollTrigger: {
                trigger: "#horizontal",  // The section to trigger scrolling
                pin: true,               // Pin the section during scrolling
                scrub: 0.3,              // Smooth scrolling
                snap: 1 / (contents.length - 1), // Snap to the content
                start: "top top",        // Trigger start point
                end: () => `+=${window.innerWidth * contents.length}`, // Dynamically calculate end point
            }
        });

        // Cleanup function to destroy GSAP and Lenis when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            lenis.destroy();
        };
    }, []);

    return (
        <Layout>
            <>
            <div id="container__horizontal ">
                <div className="bg-[#1765ff] h-[100vh] section">section 1</div>
                <div className="bg-[#ff1717] h-[100vh] section">section 2</div>
                <div className="bg-[#00ff00] h-[100vh] section">section 3</div>
                        
                        <section id="horizontal" className='section'>
                    	    <div className="content"><p>Content 1</p></div>
                    	    <div className="content"><p>Content 2</p></div>
                    	    <div className="content"><p>Content 3</p></div>
                    	</section>
            </div>
            <section className='h-[100vh] w-full bg-[#FACC15]'>
                <h1>Home</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ex praesentium maxime eligendi reprehenderit ea. Ea nihil ipsa molestiae quam doloribus placeat distinctio optio sint ducimus magni nesciunt, quos eum?</p>
            </section>
            
                     
            </>
        </Layout>
    );
}

export default Home;
