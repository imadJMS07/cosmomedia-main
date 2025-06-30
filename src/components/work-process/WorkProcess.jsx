import React from 'react';
import { motion } from 'framer-motion';
import { WORK_STEPS } from '@/components/work-process/config';
import { COLORS } from '@/constants/colors';

const WorkProcess = () => {
  return (
    <section className="py-24 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-wider uppercase"
          style={{ color: '#00F5CC' }}
        >
          WORK PROCESS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-4xl font-bold text-white"
        >
          Follow 4 Easy Work Steps
        </motion.h2>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {WORK_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group z-10"
            >
              {/* Circle with border animation on hover */}
              <div className="relative">
                <div 
                  className="w-32 h-32 mx-auto rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/5 group-hover:border-[#00F5CC] transition-colors duration-300"
                  style={{ '--tw-border-opacity': 0.1 }}
                >
                  {/* Icon */}
                  <step.Icon />
                </div>
                
                {/* Glowing circle behind */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ 
                    background: COLORS.primary,
                    transform: 'scale(1.2)'
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="text-center mt-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < WORK_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%_+_16px)] w-[calc(100%_-_64px)] h-[2px] bg-white/5 -z-10">
                  <div 
                    className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: '#00F5CC' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
