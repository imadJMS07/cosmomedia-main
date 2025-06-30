import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants/colors';

const ContactInfo = ({ Icon, text, label }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-start space-x-3"
  >
    <div className="p-2 rounded-lg" style={{ background: `${COLORS.primary}10` }}>
      <Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
    </div>
    <div>
      <p className="text-white/70 text-sm">{label}</p>
      <p className="text-white mt-1">{text}</p>
    </div>
  </motion.div>
);

ContactInfo.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContactInfo;
