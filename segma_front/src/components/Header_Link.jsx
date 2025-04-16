import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header_Link = ({ children, linkTo }) => {
  const location = useLocation();
  const isActive = location.pathname === linkTo;

  return (
    <li className="relative">
      <Link to={linkTo} className="relative inline-block px-1 text-base">
        {children}
        <motion.div
          className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-current"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1.01 : 0 }}
          whileHover={{ scaleX: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      </Link>
    </li>
  );
};

export default Header_Link;
