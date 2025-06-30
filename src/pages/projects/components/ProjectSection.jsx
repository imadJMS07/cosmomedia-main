import React from "react";
import { motion } from "framer-motion";

const ProjectSection = ({ index, header, description, icon: Icon, images = ["/images/contact.webp"] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden bg-[#111111] border border-white/5 p-8 sm:p-10"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Content Side */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start gap-5 mb-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center bg-[#00F5CC] text-black text-2xl font-bold">
                {index}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#00F5CC] mb-3">
                {header}
              </h3>
              <span className="px-4 py-1.5 text-sm bg-white/5 text-gray-400">
                Section {index}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-400 leading-relaxed pl-[4.75rem]">
            {description}
          </div>
        </div>

        {/* Image Side - Only show first image */}
        <div className="lg:w-[400px]">
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <img
              src={images[0]}
              alt={`${header} illustration`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
