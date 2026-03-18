import { motion, useScroll, useTransform } from "framer-motion";
import RippleButton from "../ui/RippleButton";

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.6 }}
        className="mb-8 flex justify-center lg:hidden"
      >
        <div className="relative h-52 w-52 overflow-hidden rounded-3xl border border-cyan-300/35 bg-slate-900">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Raghav Kumar"
            className="h-full w-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-pink-300/10" />
        </div>
      </motion.div>

      <div className="absolute right-0 top-20 hidden lg:flex lg:items-center lg:justify-center">
        <div className="relative h-64 w-64">
          <motion.div
            style={{ y }}
            className="relative h-full w-full overflow-hidden rounded-3xl border border-cyan-300/35 bg-slate-900"
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Raghav Kumar"
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-pink-300/10" />
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-xs uppercase tracking-[0.35em] text-cyan-300"
      >
        Hello, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
      >
        Raghav Kumar
        <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
          Full Stack Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.75 }}
        className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-lg"
      >
        M.C.A graduate with expertise in building scalable web applications,
        modern frontend architectures, and full-stack solutions. Passionate
        about clean code, performance optimization, and creating exceptional
        user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.65 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <RippleButton
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </RippleButton>
        <RippleButton
          className="border-fuchsia-300/45 bg-fuchsia-400/10 text-fuchsia-100 hover:bg-fuchsia-300/20"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </RippleButton>
      </motion.div>
    </section>
  );
}

export default HeroSection;
