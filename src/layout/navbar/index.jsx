import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiDotsHorizontal } from 'react-icons/hi';
import { COLORS } from '../../constants/colors';
import { NAVIGATION_ITEMS } from './config';

// Components
import Logo from './components/Logo';
import NavigationLink from './components/NavigationLink';
import MobileMenu from './components/MobileMenu';
import ContactPanel from './components/ContactPanel';

/**
 * Main Navbar component that provides navigation and contact functionality
 * Includes responsive design with mobile menu and contact panel
 */
const Navbar = () => {
  // State
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Panel toggles
  const toggleContactPanel = () => {
    setIsContactPanelOpen(!isContactPanelOpen);
    document.body.style.overflow = !isContactPanelOpen ? 'hidden' : 'unset';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed w-full z-40 transition-all duration-300 overflow-hidden"
        style={{
          background: isScrolled ? `${COLORS.background}95` : COLORS.background,
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          borderBottom: `1px solid ${COLORS.primary}10`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center ">
                <Logo className="-my-2" />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden lg:flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationLink
                  key={item.name}
                  {...item}
                
                />
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              style={{ color: COLORS.primary }}
              aria-label="Toggle mobile menu"
            >
              <HiMenu className="w-6 h-6" />
            </motion.button>

            {/* Contact Button (Desktop) */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleContactPanel}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
              style={{ 
                background: `${COLORS.primary}10`,
                color: COLORS.primary
              }}
              aria-label="Toggle contact panel"
            >
              <HiDotsHorizontal className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = 'unset';
        }}
        toggleContactPanel={toggleContactPanel}
      />

      {/* Contact Panel */}
      <ContactPanel 
        isOpen={isContactPanelOpen} 
        onClose={() => {
          setIsContactPanelOpen(false);
          document.body.style.overflow = 'unset';
        }}
      />
    </>
  );
};

export default Navbar;
