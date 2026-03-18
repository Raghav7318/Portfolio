import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function ExperienceSection({ experience }) {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Experience"
        title="Timeline of growth"
        description="From building interfaces to owning complete product surfaces end to end."
      />

      <div className="relative pl-6">
        <div className="absolute left-0 top-2 h-[95%] w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-pink-300" />

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-md"
            >
              <span className="absolute -left-[2.05rem] top-5 h-3 w-3 rounded-full border border-cyan-200 bg-cyan-300 shadow-neon" />
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.role}
              </h3>
              <p className="text-sm text-fuchsia-200">{item.company}</p>
              <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
