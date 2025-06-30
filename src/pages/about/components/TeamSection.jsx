import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { teamMembers } from "../constants";

export const TeamSection = () => {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Background Elements */}

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <motion.div
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-[#00F5CC]">Meet Our Team</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6">
              Team Members
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] mx-auto rounded-full mb-6" />

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our Expert Team Would Like To Hear From You!
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative group overflow-hidden mb-4 aspect-[3/4] transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Background Image */}
                <motion.img
                  whileHover={{ opacity: 0.5 }}
                  initial={{ opacity: 1 }}
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Color Overlay */}
                <motion.div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social Icons */}
                <motion.div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-3 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className="text-white text-lg hover:text-[#00F5CC] transition-colors duration-300"
                    >
                      <FaTwitter />
                    </motion.a>
                  )}
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className="text-white text-lg hover:text-[#00F5CC] transition-colors duration-300"
                    >
                      <FaLinkedin />
                    </motion.a>
                  )}
                  {member.social.dribbble && (
                    <motion.a
                      href={member.social.dribbble}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className="text-white text-lg hover:text-[#00F5CC] transition-colors duration-300"
                    >
                      <FaDribbble />
                    </motion.a>
                  )}
                  {member.social.behance && (
                    <motion.a
                      href={member.social.behance}
                      whileHover={{ y: -5, scale: 1.2 }}
                      className="text-white text-lg hover:text-[#00F5CC] transition-colors duration-300"
                    >
                      <FaBehance />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Name and Role */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]">
                  {member.name}
                </h3>
                <p className="text-gray-400 uppercase text-xs tracking-wider font-medium">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
