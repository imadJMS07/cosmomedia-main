import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ size = 'w-32 h-32', className = '' }) => (
  <div className={`${size} ${className}`}>
    <img src="/logo.svg" alt="Logo" className="w-full h-full" />
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
