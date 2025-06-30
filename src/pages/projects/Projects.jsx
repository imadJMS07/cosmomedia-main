import React, { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { PROJECTS_DATA } from "./constants";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { COLORS } from "@/constants/colors";

const ProjectItem = ({ title, src, id, description, technologies = [], category, icon: Icon }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={title.toLowerCase()}>
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00F5CC]/40 transition-all duration-300"
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={src || "/images/contact.webp"}
              alt={`${title} image`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm text-[#00F5CC] font-medium">
                {category}
              </span>
            </motion.div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] shadow-lg shadow-[#00F5CC]/20">
                  <Icon className="text-black text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-[#00F5CC] group-hover:to-[#00D5AC] transition-all duration-300">
                  {title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-[#00F5CC] transition-all duration-300">
                <FiArrowUpRight className="text-xl text-white group-hover:text-black transition-all duration-300" />
              </div>
            </div>
            <p className="text-gray-400 line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10 group-hover:border-[#00F5CC]/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? "bg-[#00F5CC] text-black" 
        : "bg-white/5 text-gray-400 hover:bg-white/10"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);

  const categories = ["All", ...new Set(PROJECTS_DATA.map(project => project.category))];

  useEffect(() => {
    const filtered = selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(project => project.category === selectedCategory);
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  return (
    <>
      <PageTitle bg={"/images/projects/projects.webp"} title="Our Projects" />
      <div className="min-h-screen relative overflow-hidden bg-[#050505]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#050505]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${COLORS.primary} 0%, transparent 50%),
                radial-gradient(circle at 0% 0%, ${COLORS.secondary} 0%, transparent 30%),
                radial-gradient(circle at 100% 100%, ${COLORS.accent} 0%, transparent 40%)`,
            }}
          />
        </div>

        {/* Animated Accents */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-10 w-32 h-32"
            style={{
              background: `linear-gradient(45deg, ${COLORS.primary}20, ${COLORS.accent}20)`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              filter: "blur(40px)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40"
            style={{
              background: `linear-gradient(-45deg, ${COLORS.accent}20, ${COLORS.primary}20)`,
              borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
              filter: "blur(40px)",
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              >
                <span className="text-sm text-[#00F5CC]">Explore Our Work</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
              >
                Featured Projects
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
              >
                Discover our innovative solutions and creative endeavors that push the boundaries of technology
              </motion.p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectItem
                    key={project.id}
                    {...project}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
