import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { buttonVariants, arrowVariants, fillVariants, shimmerVariants } from '../animations/errorPageAnimations';

const AnimatedButton = ({ to, children }) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Link to={to}>
        <motion.div
          variants={buttonVariants}
          className="relative inline-flex items-center gap-3 px-8 py-3 border-2 border-[#31FCDC] rounded-full font-medium overflow-hidden group"
        >
          <motion.span
            variants={arrowVariants}
            className="relative z-10 text-[#31FCDC] group-hover:text-white"
          >
            ←
          </motion.span>
          <span className="relative z-10 text-[#31FCDC] group-hover:text-white">
            {children}
          </span>

          {/* Fill Effect */}
          <motion.div
            variants={fillVariants}
            className="absolute inset-0 bg-[#31FCDC]"
          />

          {/* Glow Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-1 bg-[#31FCDC] blur-lg"
          />

          {/* Shimmer Effect */}
          <motion.div
            variants={shimmerVariants}
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(49, 252, 220, 0.3), transparent)",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

AnimatedButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimatedButton;
