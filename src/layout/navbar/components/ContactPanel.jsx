import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../../../constants/colors';
import ContactInfo from './ContactInfo';
import SocialLink from './SocialLink';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config';

const ContactPanel = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 30 }}
          className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-black/95 backdrop-blur-lg z-50 shadow-xl overflow-y-auto"
          style={{ borderLeft: `1px solid ${COLORS.primary}20` }}
        >
          <div className="p-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>About Us</h2>
              <p className="text-white/70 leading-relaxed mt-4">
              Cosmomedia Morocco is a digital agency that builds websites, apps, and marketing solutions tailored for the Moroccan market. We help businesses grow online with creative, reliable, and scalable digital services.
              </p>
            </motion.div>

            {/* Contact Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg transition-all mb-8 font-medium"
              style={{
                background: COLORS.primary,
                color: COLORS.background
              }}
            >
              Contact Us
            </motion.button>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>Contact Us</h2>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <ContactInfo key={index} {...info} />
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-4"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      </>
    )}
  </AnimatePresence>
);

ContactPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactPanel;
