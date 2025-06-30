import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiTarget, FiUsers } from "react-icons/fi";
import { COLORS } from "../../../constants/colors";

const AnimatedWord = ({ word, delay, color }) => {
  return (
    <motion.span className="inline-block relative group cursor-default">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="inline-block"
      >
        {word.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block relative"
            whileHover={{
              scale: 1.2,
              color: color,
              transition: { duration: 0.2 }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
        style={{ background: color }}
      />
    </motion.span>
  );
};

export default function OurContent() {
  const tagline = [
    { text: "We", color: COLORS.primary },
    { text: "design", color: COLORS.secondary },
    { text: "and", color: COLORS.accent },
    { text: "develop", color: COLORS.primary },
    { text: "outstanding", color: COLORS.secondary },
    { text: "Digital", color: COLORS.accent },
    { text: "Products", color: COLORS.primary },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
        >
          <span className="text-sm text-[#00F5CC]">About Our Company</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tagline.map((word, index) => (
              <AnimatedWord
                key={word.text}
                word={word.text}
                delay={index * 0.1}
                color={word.color}
              />
            ))}
          </div>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-12">
          Creating innovative solutions for forward-thinking brands
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Feature Items */}
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] shadow-lg shadow-[#00F5CC]/20">
              <FiCheck className="text-black text-xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]">
              Creative Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We craft innovative digital solutions that help businesses thrive in
              the modern world.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] shadow-lg shadow-[#00F5CC]/20">
              <FiTarget className="text-black text-xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]">
              Strategic Approach
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our team takes a strategic approach to every project, ensuring
              optimal results.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] shadow-lg shadow-[#00F5CC]/20">
              <FiUsers className="text-black text-xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]">
              Expert Team
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our experienced team brings diverse skills and expertise to every
              project.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12"
      >
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] hover:shadow-lg hover:shadow-[#00F5CC]/25 hover:-translate-y-1"
        >
          Get Started
          <FiArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
}
