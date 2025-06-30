import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "./constants";
import PageTitle from "@/components/PageTitle";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Service not found</h1>
      </div>
    );
  }

  const serviceImages = {
    "Business Analytics": "/images/services/Business-Analytics.webp",
    "UI/UX Design": "/images/services/uixdesign.webp",
    "Digital Marketing": "/images/services/marketing.webp",
    "E-commerce Solutions":"/images/services/E-commerce.webp",
    "Mobile Development":"/images/services/mobile-dev.webp",
    "Web Development":"/images/services/web-dev.webp",

  };

  const Icon = service.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <PageTitle
          title={service.title}
          bg={
            serviceImages[service.title] ||
            "/images/services/services-header.webp"
          }
        />

        <div className="bg-[#050505] min-h-[calc(100vh-60vh)]">
          <div className="relative h-full">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, #00F5CC 0%, transparent 50%),
                  radial-gradient(circle at 0% 0%, #00D5AC 0%, transparent 30%),
                  radial-gradient(circle at 100% 100%, #3451B2 0%, transparent 40%)`,
              }}
            />
            <div className="relative z-10">
              <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Back Button */}
                <Link to="/services">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00F5CC] transition-colors duration-300 mb-12"
                  >
                    <FiArrowLeft className="text-lg" />
                    <span>Back to Services</span>
                  </motion.div>
                </Link>

                {/* Service Header */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5CC]/20 to-[#00F5CC]/5 flex items-center justify-center">
                        <Icon className="text-3xl text-[#00F5CC]" />
                      </div>
                    </div>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                      {service.content.overview}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.content.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-4 py-2 rounded-full bg-white/[0.03] text-gray-400 border border-white/5 text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[400px] overflow-hidden"
                  >
                    <img
                      src={service.content.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-8 mb-16"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Key Features
                    </h2>
                    <div className="grid gap-4">
                      {service.content.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#00F5CC]/10 flex items-center justify-center flex-shrink-0">
                            <FiCheck className="text-[#00F5CC]" />
                          </div>
                          <p className="text-gray-300">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Why Choose Us
                    </h2>
                    <div className="space-y-6 text-gray-400">
                      <p>
                        Our team of experts brings years of experience and
                        cutting-edge knowledge to every project. We're committed
                        to delivering exceptional results that drive your
                        business forward.
                      </p>
                      <p>
                        We understand that every business is unique, which is
                        why we tailor our solutions to meet your specific needs
                        and goals. Our proven track record of success speaks to
                        our dedication to excellence.
                      </p>
                      <div className="pt-4">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] text-black font-medium hover:from-[#00D5AC] hover:to-[#00F5CC] transition-all duration-300"
                        >
                          Get Started
                          <svg
                            className="w-4 h-4"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetail;
