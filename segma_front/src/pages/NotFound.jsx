import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Layout from "../components/Layout";
import half_logo from "../assets/images/half_logo.png";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const controls = useAnimation();

  const location = useLocation();

  useEffect(() => {
    const sequence = async () => {
      // Reset
      controls.set({ rotateZ: 0, width: 300 });

      // Step 1: Rotate
      await controls.start({
        rotateZ: 360,
        transition: { duration: 1.2, ease: "easeInOut" },
      });

      // Step 2: Expand
      await controls.start({
        width: 600,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    };

    sequence();
  }, [location.pathname, controls]);

  return (
    <Layout>
      <div className="relative h-dvh flex justify-center items-center">
        <motion.div
          initial={{ rotateZ: 0, width: 300 }}
          animate={controls}
          className="relative h-[300px] flex justify-between">
         
          <motion.div
            key={location.pathname} 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute z-[99] text-[#C40D2E] font-bold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            404 NOT FOUND
          </motion.div>

          {/* Left half */}
          <div className="h-full w-[134px] flex justify-center items-center text-white">
            <img
              src={half_logo}
              className="w-full h-full mt-2.5 object-contain rotate-180"
              alt=""
            />
          </div>

          {/* Right half */}
          <div className="h-full w-[134px] flex justify-center items-center text-white">
            <img
              src={half_logo}
              className="w-full h-full mb-2.5 object-contain"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
