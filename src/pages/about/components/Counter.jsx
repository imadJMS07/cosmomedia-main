import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../../constants/colors";

export const CounterSection = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <CounterItem value={7} label="Years Experience" delay={0.1} />
            <CounterItem value={95} label="Client Satisfaction" delay={0.2} />
            <CounterItem value={25} label="Visited Conference" delay={0.3} />
            <CounterItem value={97} label="Digital Solutions Deployed" delay={0.4} />
          </div>
        </div>
      </motion.div> 
    </div>
  );
};

const CounterItem = ({ value, label, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const hasStarted = useRef(false);

  useEffect(() => {
    const startCounting = async () => {
      await controls.start("visible");

      const duration = 2;
      const startTime = performance.now();

      const animateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`#counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, controls]);

  return (
    <motion.div
      id={`counter-${value}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-transparent border border-white/10 hover:border-[#00F5CC]/50 transition-all duration-500 flex flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <motion.div
        className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5CC] to-[#00D5AC] transition-all duration-300 group-hover:scale-110"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: isHovered ? `0 0 20px ${COLORS.primary}40` : "none"
        }}
      >
        {count}
        {suffix}
      </motion.div>

      <motion.div
        className="text-gray-400 z-10 text-base sm:text-lg font-medium uppercase tracking-wider text-center transition-all duration-300 group-hover:text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {label.split(" ").map((word, i) => (
          <motion.div 
            key={i} 
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 + (i * 0.1), duration: 0.5 }}
          >
            {word}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
