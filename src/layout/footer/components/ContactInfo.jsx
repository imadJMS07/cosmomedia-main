import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants/colors';

const ContactInfo = ({ Icon, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="flex items-center space-x-3"
  >
    <div 
      className="p-2 rounded-lg"
      style={{ background: `${COLORS.primary}10` }}
    >
      <Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
    </div>
    <span className="text-white/70 ">{text}</span>
  </motion.div>
);

ContactInfo.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfo;
