import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.1,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
