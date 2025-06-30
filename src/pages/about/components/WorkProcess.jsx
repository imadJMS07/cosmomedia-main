import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiLayers, FiCode, FiCheck } from "react-icons/fi";

const steps = [
  {
    icon: <FiTarget />,
    title: "Discovery & Strategic Planning",
    description:
      "We begin by diving deep into your business objectives, target audience, and technical requirements to build a solid foundation for success.",
  },
  {
    icon: <FiLayers />,
    title: "Intuitive Design & Prototyping",
    description:
      "Our design team crafts pixel-perfect interfaces that balance aesthetics with functionality, delivering prototypes that bring your user experience to life.",
  },
  {
    icon: <FiCode />,
    title: "Agile Development",
    description: "Using industry best practices and clean code architecture, our developers build robust, scalable solutions tailored to your specific needs.",
  },
  {
    icon: <FiCheck />,
    title: "Quality Assurance & Deployment",
    description:
      "Every feature undergoes rigorous testing across devices and platforms to ensure flawless performance before we launch your product to the world.",
  },
];

export default function WorkProcess() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
        >
          <span className="text-sm text-[#00F5CC]">How We Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
        >
          Our Work Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We follow a systematic approach to deliver outstanding results for every
          project.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pt-8"
          >
            {/* Number Badge - Now positioned above the card */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] rounded-2xl flex items-center justify-center text-black text-2xl font-bold shadow-lg shadow-[#00F5CC]/20 z-10"
            >
              {index + 1}
            </motion.div>

            {/* Main Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 h-[280px] rounded-2xl border border-white/10 hover:border-[#00F5CC]/20 hover:bg-white/[0.05] transition-all duration-300 group">
              <div className="text-3xl mb-6 text-[#00F5CC] group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed line-clamp-4">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
