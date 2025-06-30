import { COLORS } from "@/constants/colors";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi2";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mb-2"
    >
      <div className="inline-flex items-center gap-3 text-sm md:text-base bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <motion.div variants={itemVariants} className="flex items-center">
          <Link 
            to="/" 
            className="text-white/90 hover:text-[#00F5CC] transition-all duration-300 font-medium flex items-center gap-1"
          >
            <span className="text-[#00F5CC]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            <span>Home</span>
          </Link>
        </motion.div>

        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;
          const decodedName = decodeURIComponent(name);
          
          return (
            <React.Fragment key={breadcrumbPath}>
              <motion.div
                variants={itemVariants}
                className="flex items-center text-[#00F5CC]"
              >
                <HiChevronRight className="w-4 h-4" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center"
              >
                {isLast ? (
                  <span className="text-[#00F5CC] font-semibold capitalize">
                    {decodedName}
                  </span>
                ) : (
                  <Link
                    to={breadcrumbPath}
                    className="text-white/90 hover:text-[#00F5CC] transition-all duration-300 font-medium capitalize"
                  >
                    {decodedName}
                  </Link>
                )}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Breadcrumbs;
