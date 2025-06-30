import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../constants/colors";
import Navbar from "./navbar";
import Footer from "./footer";
import Loading from "../components/Loading";
import ScrollProgress from "../components/ui/ScrollProgress";
import CursorDot from "../components/ui/CursorDot";
import ScrollToTop from "@/components/ScrollToTop";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      y: 30,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-black"
      style={{ background: COLORS.background }}
    >
      <ScrollToTop />
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              variants={pageVariants}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
