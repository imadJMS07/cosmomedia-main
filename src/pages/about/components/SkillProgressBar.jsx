import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { COLORS } from "../../../constants/colors";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaFigma,
  FaStripe
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiKubernetes
} from "react-icons/si";
import { FiCode, FiLayout, FiSmartphone, FiDatabase } from "react-icons/fi";

const TECH_STACK = [
  { 
    icon: <FaReact className="text-2xl" />,
    name: "React",
    color: "#61DAFB",
    category: "frontend"
  },
  {
    icon: <SiNextdotjs className="text-2xl" />,
    name: "Next.js",
    color: "#ffffff",
    category: "frontend"
  },
  {
    icon: <SiTailwindcss className="text-2xl" />,
    name: "Tailwind",
    color: "#38BDF8",
    category: "frontend"
  },
  {
    icon: <SiTypescript className="text-2xl" />,
    name: "TypeScript",
    color: "#3178C6",
    category: "language"
  },
  {
    icon: <FaNodeJs className="text-2xl" />,
    name: "Node.js",
    color: "#339933",
    category: "backend"
  },
  {
    icon: <SiSpring className="text-2xl" />,
    name: "Spring Boot",
    color: "#6DB33F",
    category: "backend"
  },
  {
    icon: <FaJava className="text-2xl" />,
    name: "Java",
    color: "#007396",
    category: "language"
  },
  {
    icon: <FaPython className="text-2xl" />,
    name: "Python",
    color: "#3776AB",
    category: "language"
  },
  {
    icon: <FaGithub className="text-2xl" />,
    name: "GitHub",
    color: "#ffffff",
    category: "devops"
  },
  {
    icon: <FaGitlab className="text-2xl" />,
    name: "GitLab",
    color: "#FC6D26",
    category: "devops"
  },
  {
    icon: <FaGithub className="text-2xl" />,
    name: "CI/CD",
    color: "#2088FF",
    category: "devops"
  },
  {
    icon: <FaFigma className="text-2xl" />,
    name: "Figma",
    color: "#F24E1E",
    category: "design"
  },
  {
    icon: <FaAws className="text-2xl" />,
    name: "AWS",
    color: "#FF9900",
    category: "cloud"
  },
  {
    icon: <SiMongodb className="text-2xl" />,
    name: "MongoDB",
    color: "#47A248",
    category: "database"
  },
  {
    icon: <SiPostgresql className="text-2xl" />,
    name: "PostgreSQL",
    color: "#4169E1",
    category: "database"
  },
  {
    icon: <FaDocker className="text-2xl" />,
    name: "Docker",
    color: "#2496ED",
    category: "devops"
  },
  {
    icon: <SiKubernetes className="text-2xl" />,
    name: "Kubernetes",
    color: "#326CE5",
    category: "devops"
  },
  {
    icon: <FaStripe className="text-2xl" />,
    name: "Stripe",
    color: "#008CDD",
    category: "payment"
  },
];

export function WebDevMarquee() {
  return (
    <div className="relative w-full py-16 overflow-hidden bg-black/10 backdrop-blur-sm">
      {/* Enhanced Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

      <Marquee
        autoFill
        speed={40}
        gradient={false}
        style={{ gap: "1.5rem" }}
        className="py-4"
      >
        <div className="flex gap-12 px-4">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-6 px-10 py-6 rounded-2xl relative group backdrop-blur-md"
              style={{
                background: `linear-gradient(165deg, ${tech.color}15, ${tech.color}05)`,
                border: `1px solid ${tech.color}30`,
                boxShadow: `0 0 20px ${tech.color}10`,
              }}
              whileHover={{
                scale: 1.08,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Enhanced Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`,
                  filter: "blur(15px)",
                }}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />

              <motion.span
                className="relative z-10 text-xl"
                style={{ color: tech.color }}
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
              >
                {tech.icon}
              </motion.span>

              <motion.span
                className="relative z-10 text-sm font-semibold tracking-wide"
                style={{ color: `${tech.color}` }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default function SkillProgressBar() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5CC]/10 to-[#00D5AC]/10 backdrop-blur-sm border border-[#00F5CC]/20 mb-8 group hover:border-[#00F5CC]/40 transition-all duration-300"
          >
            <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] font-medium">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DEVELOPMENT_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-white/10 group hover:border-[#00F5CC]/20 transition-all duration-500"
              style={{
                background: `linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4 rounded-2xl mr-5 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                  }}
                >
                  <div className="relative z-10 text-[#00F5CC] group-hover:scale-110 transform transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F5CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Expert Level</p>
                </div>
              </div>

              <div className="relative h-2.5 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${COLORS.secondary})`,
                    boxShadow: `0 0 20px ${skill.color}40`,
                  }}
                />
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-sm text-gray-400 font-medium">
                  Proficiency
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC]"
                >
                  {skill.percentage}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
