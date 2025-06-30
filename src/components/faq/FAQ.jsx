import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'What services do you offer?',
      answer: 'We provide end-to-end digital solutions including custom web development, mobile apps, UI/UX design, e-commerce platforms, and digital marketing—all tailored to fuel your business growth.'
    },
    {
      question: 'What technology stack do you use?',
      answer: 'Our projects are built with modern, scalable tools like React, Node.js, Python, Flutter, and AWS, ensuring high performance, security, and future-ready solutions.'
    },
    {
      question: 'How much experience do you have?',
      answer: 'With over 7 years in the industry since 2017, we’ve successfully delivered 150+ projects, earning a 95% client retention rate through consistent quality and reliability.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow a streamlined agile approach: from discovery and design to development, deployment, and ongoing support, ensuring transparency and adaptability at every stage.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'Every project undergoes rigorous code reviews, automated testing, user feedback sessions, and security audits to guarantee flawless performance and user satisfaction.'
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:sticky lg:top-24">
            <span className="inline-block text-sm text-[#00F5CC] uppercase tracking-wider font-medium bg-[#00F5CC]/10 px-3 py-1.5 rounded-full border border-[#00F5CC]/20 mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00F5CC] mb-8">
              Have Questions? We've Got Answers
            </h2>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-center"
                >
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                  >
                    <motion.img
                      src="/images/help-desk.png"
                      alt="Help Desk"
                      className="w-full h-full object-contain max-w-full max-h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-6">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 pb-6 hover:bg-white/5 rounded-lg p-4 -mx-4 transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00D5AC] transition-colors duration-300">
                    {item.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#00D5AC] to-[#00F5CC] flex items-center justify-center"
                    style={{ boxShadow: activeIndex === index ? `0 0 20px rgba(0, 213, 172, 0.3)` : 'none' }}
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {activeIndex === index ? (
                        <>
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </>
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </>
                      )}
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 mt-4 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
