import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8 sm:mb-10">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan-300"
      >
        {eyebrow}
      </motion.p>
      <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
