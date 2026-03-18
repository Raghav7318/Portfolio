import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function SkillsSection({ skills }) {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Skills"
        title="Tech stack tuned for high-impact products"
        description="A blend of frontend depth, backend fluency, and production-level tooling."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-100">{skill.name}</p>
              <p className="text-xs text-cyan-300">{skill.level}%</p>
            </div>
            <div className="h-2 rounded-full bg-slate-800/80">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
