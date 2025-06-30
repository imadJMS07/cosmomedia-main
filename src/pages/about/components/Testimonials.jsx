import { motion } from "framer-motion";
import { COLORS } from "../../../constants/colors";
import { writers } from "../constants";
import { FaRegUserCircle } from "react-icons/fa";

export default function Writers() {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${COLORS.primary} 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, ${COLORS.secondary} 0%, transparent 30%),
            radial-gradient(circle at 100% 100%, ${COLORS.accent} 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-[#00F5CC]">What Our Clients Say</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6">
              Testimonials
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] mx-auto rounded-full mb-6" />

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about their experience working with us
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {writers.map((writer, index) => (
            <motion.div
              key={writer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-transparent border border-white/10 hover:border-[#00F5CC]/50 transition-all duration-500">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute -top-4 left-8 w-8 h-8 flex items-center justify-center rounded-full bg-[#00F5CC] text-black text-xl font-serif"
                >
                  &quot;
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.p
                    className="text-gray-400 text-lg mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {writer.description}
                  </motion.p>

                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00F5CC] p-0.5"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] opacity-20" />
                      
                      <FaRegUserCircle className="text-black w-full h-full object-cover rounded-full"/>
                    </motion.div>

                    <div>
                      <motion.h3
                        className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {writer.name}
                      </motion.h3>

                      <motion.p
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {writer.role}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
