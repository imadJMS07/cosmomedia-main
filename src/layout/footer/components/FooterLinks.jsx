import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants/colors';

const FooterLinks = ({ title, links }) => (
  <div className="w-full sm:w-auto">
    <h3 
      className="text-lg font-semibold mb-6"
      style={{ color: COLORS.primary }}
    >
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <motion.li
          key={link.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            to={link.path}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterLinks;
