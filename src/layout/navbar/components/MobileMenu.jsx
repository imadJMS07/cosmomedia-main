import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { COLORS } from '../../../constants/colors';
import Logo from './Logo';
import NavigationLink from './NavigationLink';
import SocialLink from './SocialLink';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../config';

const MobileMenu = ({ isOpen, onClose, toggleContactPanel }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        className="fixed inset-y-0 right-0 w-4/5 bg-black/95 backdrop-blur-lg z-50 shadow-xl"
        style={{ borderLeft: `1px solid ${COLORS.primary}20` }}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Logo size="w-24 h-24" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2"
              style={{ color: COLORS.primary }}
            >
              <FiX className="w-6 h-6" />
            </motion.button>
          </div>
          
          <nav className="flex-1">
            <div className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationLink
                  key={item.name}
                  {...item}
                  isMobile
                  onClick={() => {
                    onClose();
                    if (item.name === 'CONTACT') toggleContactPanel();
                  }}
                />
              ))}
            </div>
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleContactPanel: PropTypes.func.isRequired,
};

export default MobileMenu;
