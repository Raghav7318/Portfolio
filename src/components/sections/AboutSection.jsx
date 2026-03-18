import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function AboutSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="About"
        title="M.C.A Graduate | Full-Stack Developer"
        description="Building scalable web applications with a strong foundation in computer science. Passionate about clean code, performance optimization, and creating exceptional user experiences."
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-card backdrop-blur-lg sm:p-8"
      >
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          B.C.A graduate since 2023 with 80.91% aggregate, currently pursuing
          M.C.A at A.I.U Manipur (CGPA: 7.32). I am a full-stack developer
          passionate about crafting performant, user-centric web applications.
          With expertise in modern frontend frameworks, responsive design, and
          backend development, I focus on delivering high-quality solutions that
          combine visual appeal with robust engineering practices.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection;
