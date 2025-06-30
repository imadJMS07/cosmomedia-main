import React, { useRef, useEffect } from "react";
import { COLORS } from "../../constants/colors";
import { PARTNERS } from "./config";
import Marquee from "react-fast-marquee";

const PartnerItem = ({ partner, className = "" }) => {
  const itemRef = useRef(null);

  return (
    <div
      ref={itemRef}
      className={`flex-shrink-0 px-6 cursor-pointer ${className}`}
    >
      <div
        className="w-20 h-20 flex items-center justify-center rounded-lg p-3 bg-opacity-5"
        style={{ background: `${COLORS.primary}05` }}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-[opacity,filter] duration-300"
        />
      </div>
    </div>
  );
};

const Partners = () => {
  const doublePartners = [...PARTNERS];
  return (
    <section className="py-8 overflow-hidden bg-black/20 backdrop-blur-sm border-y border-white/5">
      <div className="relative max-w-7xl mx-auto">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10" />

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <Marquee pauseOnHover autoFill>
            {doublePartners.map((partner, index) => (
              <PartnerItem key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
