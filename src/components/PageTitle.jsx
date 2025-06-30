import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import Breadcrumbs from "./Breadcrumbs";

const PageTitle = ({ title, bg = "/images/services/services-header.webp" }) => {
  // Split title into characters for animation
  const characters = title.split("");

  return (
    <motion.div 
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00F5CC]/10 via-transparent to-transparent opacity-30" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          {/* Title */}
          <div className="text-center">
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-[0.15em] px-2"
              >
                {characters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white inline-block hover:text-[#00F5CC] transition-colors duration-300"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#00F5CC] to-transparent mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </motion.div>
  );
};

export default PageTitle;
