import PageTitle from "@/components/PageTitle";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ProjectSection from "./components/ProjectSection";
import { PROJECTS_DATA } from "./constants";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProjectDetails = () => {
  const { name } = useParams();
  const project = PROJECTS_DATA.find(
    (p) => p.title.toLowerCase() === name.toLowerCase()
  );

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageTitle title={project.title} bg={project.src} />

      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#00F5CC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#3451B2]/20 via-transparent to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/0 via-black to-black pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
              {/* Left Side - Hero Image */}
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative h-[600px] overflow-hidden">
                  <img
                    src={project.src}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                className="order-1 lg:order-2 flex flex-col justify-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
                >
                  <span className="text-sm text-[#00F5CC]">
                    Project Details
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-6"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-gray-400 text-lg mb-8"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-[#00F5CC]/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Features */}
                <div className="space-y-6">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00F5CC] to-[#00D5AC] shadow-lg shadow-[#00F5CC]/20">
                          {(() => {
                            const Icon = feature.icon;
                            return <Icon className="text-black text-xl" />;
                          })()}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>

                      
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Project Details Section */}
            <motion.div
              className="mb-32 rounded-2xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-16">
                {project.sections.map((section, index) => (
                  <ProjectSection
                    key={`${project.id}-${index}`}
                    index={index + 1}
                    header={section.title}
                    description={section.description}
                    images={section.images}
                  />
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center pb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] hover:shadow-lg hover:shadow-[#00F5CC]/25 hover:-translate-y-1"
              >
                View Live Demo
                <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
