import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants/colors';

const SocialLinks = ({ links }) => (
  <div className="flex space-x-4">
    {links.map(({ Icon, href, label }, index) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg transition-colors duration-200"
        style={{ background: `${COLORS.primary}10` }}
        aria-label={label}
      >
        <Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
      </motion.a>
    ))}
  </div>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialLinks;
