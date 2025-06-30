import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TeamImage = ({ src, alt, position, size, delay, className }) => {
  const style = {
    // ...position,
    width: size.width + 'px',
    height: size.height + 'px',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute rounded-full overflow-hidden ${className}`}
      style={{
        width: size.width + "px",
        height: size.height + "px",
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

TeamImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default TeamImage;
