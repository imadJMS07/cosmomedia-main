import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import { backgroundAnimations } from "../animations/errorPageAnimations";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1F] relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Effect */}
      <div className="absolute inset-0">
        <motion.div
          animate={backgroundAnimations.leftGradient.animate}
          transition={backgroundAnimations.leftGradient.transition}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-[#31FCDC]/20 to-[#383d52]/20 rounded-full blur-3xl -top-48 -left-24"
        />
        <motion.div
          animate={backgroundAnimations.rightGradient.animate}
          transition={backgroundAnimations.rightGradient.transition}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-[#383d52]/20 to-[#31FCDC]/20 rounded-full blur-3xl -bottom-48 -right-24"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group cursor-default"
        >
          <h1 className="text-[12rem] font-bold relative transition-transform duration-500 group-hover:scale-105">
            <span
              className="absolute inset-0 text-black -z-10"
              style={{ WebkitTextStroke: "0.2vw #383d52" }}
            >
              404
            </span>
            <motion.span
              className="relative block"
              style={{
                WebkitTextStroke: "0.2vw #31FCDC",
                color: "#31FCDC",
              }}
              whileHover={{
                textShadow: [
                  "0 0 20px rgba(49, 252, 220, 0.5)",
                  "0 0 40px rgba(49, 252, 220, 0.3)",
                  "0 0 20px rgba(49, 252, 220, 0.5)",
                ],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                },
              }}
            >
              404
            </motion.span>
          </h1>
          <p className="text-2xl text-[#31FCDC] mb-8 font-light opacity-90">
            Oops! This page seems to be lost in space
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedButton to="/">Back to Home</AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
