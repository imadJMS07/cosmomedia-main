import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants/colors';

const SocialLink = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="p-2 rounded-lg transition-colors duration-200"
    style={{ background: `${COLORS.primary}10` }}
    aria-label={label}
  >
    <Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
  </motion.a>
);

SocialLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialLink;
