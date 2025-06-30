import PageTitle from "@/components/PageTitle";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { CONTACT_INFO, FORM_OPTIONS } from "./constants";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact Us" bg="/images/contact.webp" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-16"
        >
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5CC]/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#00F5CC]/10 text-[#00F5CC] mb-4">
                  {CONTACT_INFO.title}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {CONTACT_INFO.subtitle}
                </h2>
                <p className="text-gray-400 mb-8">
                  {CONTACT_INFO.description}
                </p>

                <div className="space-y-6">
                  {CONTACT_INFO.details.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className={`group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00F5CC]/20 transition-all duration-300 ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#00F5CC]/10 flex items-center justify-center group-hover:bg-[#00F5CC]/20 transition-colors duration-300">
                        <item.icon className="text-[#00F5CC] text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.info}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5CC]/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {FORM_OPTIONS.title}
                </h2>
                <p className="text-gray-400 mb-8">
                  {FORM_OPTIONS.subtitle}
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-gray-400 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200">
                      {FORM_OPTIONS.subjects.map((subject) => (
                        <option key={subject.value} value={subject.value} className="bg-black">
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5CC]/30 focus:ring-2 focus:ring-[#00F5CC]/20 transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] text-black font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#00F5CC]/25 transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <FiSend className="text-lg" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.236896579332!2d-7.553567288705305!3d33.56362247323373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63351ae318df3%3A0xd8647e6fe774ff4c!2sHay%20Moulay%20Rachid%2C%20Casablanca%2020670!5e0!3m2!1sfr!2sma!4v1744641854331!5m2!1sfr!2sma"
                className="w-full h-full"
                loading="lazy"
                style={{ filter: "invert(100%)" }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
