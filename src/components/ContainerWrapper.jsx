import React from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32 relative z-10 bg-transparent">
      {children}
    </div>
  );
};

export default ContainerWrapper;
