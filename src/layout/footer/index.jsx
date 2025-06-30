import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';
import { FOOTER_LINKS, CONTACT_INFO, SOCIAL_LINKS } from './config';
import { FooterLinks, ContactInfo, SocialLinks } from './components';
import Logo from '../navbar/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <Logo size="w-24 h-24" />
            </Link>
            <p className="text-white/70 mb-6">
              We create digital experiences for brands and companies by using technology.
            </p>
            <SocialLinks links={SOCIAL_LINKS} />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <FooterLinks {...FOOTER_LINKS.company} />
            <FooterLinks {...FOOTER_LINKS.services} />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 
              className="text-lg font-semibold mb-6"
              style={{ color: COLORS.primary }}
            >
              Contact Info
            </h3>
            <div className="space-y-4">
              {CONTACT_INFO.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/70 text-sm text-center sm:text-left">
              © {currentYear} CosmoMedia. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
