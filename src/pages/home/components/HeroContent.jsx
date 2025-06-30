import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO_CONTENT, NAVIGATION_BUTTONS } from "../constants";
import { COLORS } from "../../../constants/colors";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:max-w-2xl pt-20"
    >
      <h1 className="relative mb-6">
        <span className="block text-6xl lg:text-7xl font-bold text-white">
          {HERO_CONTENT.title}
        </span>
        <motion.span
          className="block text-5xl lg:text-6xl font-bold mt-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: COLORS.primary,
            textShadow: `0 0 20px ${COLORS.primary}30`,
          }}
        >
          {HERO_CONTENT.subtitle}
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`text-[${COLORS.textMuted}] text-lg mb-10 max-w-xl`}
      >
        {HERO_CONTENT.description}
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4">
        {NAVIGATION_BUTTONS.map(({ id, text, to }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + id * 0.1, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={to}
                className={
                  id === 1
                    ? `inline-block px-8 py-4 rounded-lg bg-[${COLORS.primary}] text-black font-medium transition-all hover:shadow-lg hover:shadow-[${COLORS.primary}]/25`
                    : `inline-block px-8 py-4 rounded-lg border border-[${COLORS.primary}] text-[${COLORS.primary}] font-medium transition-all hover:bg-[${COLORS.primary}]/10`
                }
              >
                {text}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
