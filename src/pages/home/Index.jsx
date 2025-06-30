import React from "react";
import { motion } from "framer-motion";
import WaveBackground from "./components/WaveBackground";
import HeroContent from "./components/HeroContent";
import TeamImages from "./components/TeamImages";
import Partners from "@/components/partners/Partners";
import WorkProcess from "@/components/work-process/WorkProcess";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import TeamMembers from "@/components/team/TeamMembers";
import ProjectGallery from "@/components/projects/ProjectGallery";
import FAQ from "@/components/faq/FAQ";
import { COLORS } from "@/constants/colors";
import ContainerWrapper from "@/components/ContainerWrapper";

const Home = () => {
  return (
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

      <WaveBackground />

      {/* Main Content */}
      <ContainerWrapper>
        <div className="flex flex-col gap-16 lg:gap-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2">
              <HeroContent />
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 mt-8 lg:mt-0">
              <TeamImages />
            </div>
          </motion.div>

          {/* Partners Section */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <Partners />
          </div>

          <WorkProcess />
          <About />
          <Services />
          <TeamMembers />
          
          <ProjectGallery />

          <FAQ />
        </div>
      </ContainerWrapper>

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
    </div>
  );
};

export default Home;
