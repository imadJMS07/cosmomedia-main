import React from "react";
import { motion } from "framer-motion";
import TeamImages from "./components/TeamImages";
import OurContent from "./components/OurContent";
import PageTitle from "@/components/PageTitle";
import WorkProcess from "./components/WorkProcess";
import { CounterSection } from "./components/Counter";
import { WebDevMarquee } from "./components/SkillProgressBar";
import Writers from "./components/Testimonials";
import TeamMembers from "@/components/team/TeamMembers";

const AboutUs = () => {
  return (
    <>
      <PageTitle title={"About Us"} bg={"/images/about.webp"}/>
      {/* Main Content */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#00F5CC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#3451B2]/20 via-transparent to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/0 via-black to-black pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <TeamImages />
              </motion.div>

              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <OurContent />
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div 
              className="mb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <WebDevMarquee />
            </motion.div>

            {/* Work Process Section */}
            <motion.div 
              className="mb-32 rounded-2xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkProcess />
            </motion.div>

            {/* Counter Section */}
            <motion.div 
              className="mb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <CounterSection />
            </motion.div>

            {/* Writers Section */}
            <motion.div 
              className="mb-32 rounded-2xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Writers />
            </motion.div>

            {/* Team Section */}
            <motion.div 
              className="pb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <TeamMembers />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
