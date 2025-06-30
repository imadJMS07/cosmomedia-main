import React from 'react';
import { motion } from 'framer-motion';

const ServiceItem = ({ number, title, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center justify-between py-8 border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-colors rounded-lg px-4"
    onClick={onClick}
  >
    <div className="flex items-center gap-6">
      <span className="text-lg text-white/30">{String(number).padStart(2, '0')}</span>
      <h3 className="text-xl text-white group-hover:text-[#00F5CC] transition-colors">
        {title}
      </h3>
    </div>
    <motion.div 
      className="w-10 h-10 rounded-full border border-[#00F5CC]/20 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      style={{ background: 'rgba(0,245,204,0.1)' }}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#00F5CC" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </motion.div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: 'Business Strategy & Consulting',
      description: 'Comprehensive business consulting and strategic planning services.'
    },
    {
      title: 'Web Design and Development',
      description: 'Modern web solutions with cutting-edge technologies.'
    },
    {
      title: 'Financial Planning and Advisory',
      description: 'Expert financial guidance and planning services.'
    },
    {
      title: 'Business Strategy & Consulting',
      description: 'Comprehensive business consulting and strategic planning services.'
    },
    {
      title: 'Web Design and Development',
      description: 'Modern web solutions with cutting-edge technologies.'
    },
    {
      title: 'Financial Planning and Advisory',
      description: 'Expert financial guidance and planning services.'
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-wider uppercase"
            style={{ color: '#00F5CC' }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-bold text-white"
          >
            Our Premium Service
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div>
            {services.slice(0, 3).map((service, index) => (
              <ServiceItem
                key={index}
                number={index + 1}
                title={service.title}
                onClick={() => console.log('Service clicked:', service.title)}
              />
            ))}
          </div>
          <div>
            {services.slice(3, 6).map((service, index) => (
              <ServiceItem
                key={index + 3}
                number={index + 4}
                title={service.title}
                onClick={() => console.log('Service clicked:', service.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
