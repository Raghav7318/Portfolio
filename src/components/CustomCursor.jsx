import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const x = useSpring(cursorX, { stiffness: 400, damping: 38, mass: 0.2 });
  const y = useSpring(cursorY, { stiffness: 400, damping: 38, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    setIsTouch(media.matches);

    const onMove = (event) => {
      cursorX.set(event.clientX - 12);
      cursorY.set(event.clientY - 12);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [cursorX, cursorY]);

  if (isTouch) {
    return null;
  }

  return (
    <>
      <motion.div className="custom-cursor" style={{ x, y }} />
      <motion.div
        className="custom-cursor-trail"
        style={{ x, y }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}

export default CustomCursor;
