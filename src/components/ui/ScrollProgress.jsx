import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../../constants/colors';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.round(currentProgress));
      
      // Show indicator only after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        >
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm border border-white/10" />
          
          {/* Progress circle */}
          <svg
            className="w-16 h-16 -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            <circle
              className="text-white/10"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            <circle
              style={{ color: COLORS.primary }}
              className="transition-all duration-300 ease-in-out"
              strokeWidth="4"
              strokeDasharray={`${2.76 * progress} 276`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white/90">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;
