import { useState } from "react";
import { motion } from "framer-motion";

function RippleButton({ children, className = "", ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const ripple = { x, y, size, key: Date.now() };

    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== ripple.key));
    }, 550);

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-xl border border-cyan-300/45 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-neon transition hover:bg-cyan-300/20 ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default RippleButton;
