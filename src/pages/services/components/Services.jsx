import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <Link to={`/services/${service.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="group relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[#00F5CC]/20 transition-all duration-500 h-full"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#00F5CC]/5 flex items-center justify-center group-hover:bg-[#00F5CC]/10 transition-colors duration-500">
              <Icon className="text-2xl text-[#00F5CC]" />
            </div>
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-white group-hover:text-[#00F5CC] transition-colors duration-500"
              >
                {service.title}
              </motion.h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-6 flex-grow">
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Key Features</h4>
              <ul className="grid gap-3">
                {service.content.features.slice(0, 3).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-sm text-gray-400 flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-[#00F5CC]" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {service.content.technologies.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-3 py-1 text-xs bg-white/[0.03] text-gray-400"
                  >
                    {tech}
                  </motion.span>
                ))}
                {service.content.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs bg-white/[0.03] text-gray-400">
                    +{service.content.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#00F5CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium">Learn More</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services; 