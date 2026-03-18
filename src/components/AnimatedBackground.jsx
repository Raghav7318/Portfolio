import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedBackground({ theme }) {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 opacity-80"
      >
        <div className="aurora-grid h-full w-full" />
      </motion.div>

      <div
        className={`absolute -left-28 top-10 h-80 w-80 rounded-full blur-3xl ${theme === "neon" ? "bg-cyan-500/35" : "bg-fuchsia-500/35"}`}
      />
      <div
        className={`absolute -right-24 top-40 h-96 w-96 rounded-full blur-3xl ${theme === "neon" ? "bg-pink-500/30" : "bg-blue-500/30"}`}
      />
      <div
        className={`absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl ${theme === "neon" ? "bg-violet-500/25" : "bg-cyan-500/25"}`}
      />

      {Array.from({ length: 35 }).map((_, i) => (
        <motion.span
          key={i}
          className="particle"
          initial={{ opacity: 0.1 + Math.random() * 0.35, y: 0 }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 4 + (i % 6),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;
