import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';

const ServiceItem = ({ number, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: number * 0.1 }}
    className="flex gap-6 items-start group"
  >
    <div 
      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
      style={{ background: `${COLORS.primary}10` }}
    >
      {String(number).padStart(2, '0')}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const ExperienceCard = () => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, type: 'spring' }}
    className="absolute top-1/2 -mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00F5CC] text-black px-6 py-4 rounded-2xl z-10"
  >
    <div className="text-5xl font-bold">7+</div>
    <div className="text-sm uppercase tracking-wider mt-1 font-medium">
      YEARS<br />EXPERIENCE
    </div>
  </motion.div>
);

const About = () => {
  const services = [
    {
      title: "Tailored Solutions, Delivered Excellence",
      description: "We combine innovation with precision to build custom web and mobile applications that align perfectly with your business goals. From concept to launch, we ensure seamless functionality and scalability"
    },
    {
      title: "Dedicated Technical Support",
      description: "Our team provides round-the-clock expertise to resolve issues, optimize performance, and keep your digital assets running smoothly—because your success is our priority"
    },
    {
      title: "Client-Centric Collaboration",
      description: "We don't just code; we listen. Through transparent communication and agile workflows, we turn your ideas into high-impact digital experiences"
    }
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-[1fr_1.2fr] gap-4">
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden mb-4 border-2 border-[#00F5CC]/10"
                >
                  <img 
                    src="/images/about-1.jpg" 
                    alt="Team member 1"
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="overflow-hidden translate-x-12 border-2 border-[#00F5CC]/10"
                >
                  <img 
                    src="/images/about-2.jpg" 
                    alt="Team member 2"
                    className="w-full h-[330px] object-cover"
                  />
                </motion.div>
              </div>
              <div className="pt-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="overflow-hidden border-2 border-[#00F5CC]/10"
                >
                  <img 
                    src="/images/about-3.jpg" 
                    alt="Team member 3"
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Card */}
            <ExperienceCard />
          </motion.div>

          {/* Right Side - Content */}
          <div className="lg:pt-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm tracking-wider uppercase"
              style={{ color: COLORS.primary }}
            >
              ABOUT OUR COMPANY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-4xl font-bold text-white mb-8"
            >
              Digital Solution Improve<br />
              Your Agency Growth
            </motion.h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <ServiceItem 
                  key={service.title}
                  number={index + 1}
                  {...service}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a 
                href="#get-started" 
                className="inline-flex items-center px-6 py-3 rounded-lg text-black font-medium transition-all"
                style={{ 
                  background: COLORS.primary,
                  boxShadow: `0 0 20px ${COLORS.primary}40`
                }}
              >
                Get Started Now
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
