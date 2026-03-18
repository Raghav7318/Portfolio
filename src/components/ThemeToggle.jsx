import { motion } from "framer-motion";

function ThemeToggle({ theme, onToggle }) {
  const handleThemeToggle = () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
    onToggle();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      onClick={handleThemeToggle}
      className="relative inline-flex h-9 w-20 items-center rounded-full border border-white/20 bg-white/5 p-1 shadow-neon backdrop-blur-md"
      aria-label="Toggle color theme"
    >
      <span className="sr-only">Toggle theme</span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 460, damping: 30 }}
        className={`h-7 w-7 rounded-full ${theme === "neon" ? "bg-cyan-300" : "bg-fuchsia-300"}`}
      />
      <span className="ml-2 text-[0.63rem] uppercase tracking-[0.2em] text-white/80">
        {theme === "neon" ? "Neon" : "Pulse"}
      </span>
    </motion.button>
  );
}

export default ThemeToggle;
