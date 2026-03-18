import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <motion.div
        className="relative h-24 w-24 rounded-full border border-cyan-300/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-3 rounded-full border border-fuchsia-400/70"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.p
        className="mt-7 text-xs uppercase tracking-[0.5em] text-cyan-200"
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
}

export default LoadingScreen;
