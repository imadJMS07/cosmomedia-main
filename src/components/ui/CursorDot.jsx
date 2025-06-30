import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="pointer-events-none fixed z-50 w-3 h-3 rounded-full backdrop-blur-sm transition-transform duration-100 ease-out"
      style={{ 
        backgroundColor: `${COLORS.primary}80`,
        boxShadow: `0 0 10px ${COLORS.primary}40`,
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CursorDot;
