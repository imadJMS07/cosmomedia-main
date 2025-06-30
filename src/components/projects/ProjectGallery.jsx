import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { PROJECTS_DATA } from "@/pages/projects/constants";
import { Link } from "react-router-dom";

const ProjectCard = ({ src, category, title, isLarge = false }) => {
  return (
    <Link to={`/projects/${title.toLowerCase()}`}>
      <div
        className={`group relative overflow-hidden bg-[#0A0A0A]/50 border border-white/10 hover:border-[#00F5CC]/30 hover:shadow-2xl hover:shadow-[#00F5CC]/20 transition-all duration-500 ${
          isLarge ? "md:col-span-2" : ""
        }`}
      >
        {/* Image Container with Parallax Effect */}
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            initial={{ scale: 1.2, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, opacity: 0.7 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 50,
                damping: 30,
              },
              opacity: { duration: 0.3 },
            }}
            viewport={{ once: true }}
            src={src}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            {/* Category and Icon */}
            <div className="relative flex justify-between items-center mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="overflow-hidden">
                <span className="inline-block text-sm text-[#00F5CC] uppercase tracking-wider font-medium bg-[#00F5CC]/10 px-3 py-1.5 rounded-full border border-[#00F5CC]/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  {category}
                </span>
              </div>
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] flex items-center justify-center shadow-lg shadow-[#00F5CC]/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                whileHover={{
                  scale: 1.1,
                  rotate: 180,
                  boxShadow: "0 0 30px rgba(0, 245, 204, 0.4)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:rotate-45 transition-transform duration-500"
                >
                  <path d="M7 17l9.2-9.2M17 17V8m0 9H8" />
                </svg>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <h3 className="text-3xl font-bold text-white transform translate-y-full group-hover:translate-y-0 group-hover:text-[#00F5CC] transition-all duration-500 ease-out delay-100">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectGallery = () => {
  // Get the last 3 projects and make the first one large
  const lastThreeProjects = PROJECTS_DATA.slice(-3).map((project, index) => ({
    ...project,
    isLarge: index === 0 // First project will be large
  }));

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm tracking-wider uppercase font-medium"
              style={{ color: COLORS.primary }}
            >
              RECENT PROJECTS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00F5CC] leading-tight"
            >
              Explore Our Latest
              <br />
              Creative Works
            </motion.h2>
          </div>
          <Link to="/projects">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-lg text-black font-medium transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: COLORS.primary,
                boxShadow: `0 0 30px rgba(${COLORS.primary}, 0.4)`,
              }}
            >
              View All Projects
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.div>
          </Link>
        </div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {lastThreeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              src={project.src}
              category={project.category}
              title={project.title}
              isLarge={project.isLarge}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
