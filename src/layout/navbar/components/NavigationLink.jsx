import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "../../../constants/colors";

const NavigationLink = ({ name, path, isMobile = false }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <motion.div
      className={`${isMobile ? "w-full" : ""}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={path}
        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 uppercase ${
          isMobile ? "block w-full" : ""
        }`}
        style={{ color: isActive ? COLORS.primary : "white" }}
      >
        {name}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
            style={{ background: COLORS.primary }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default NavigationLink;
