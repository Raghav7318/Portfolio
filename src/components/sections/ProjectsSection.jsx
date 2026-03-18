import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "../ui/SectionHeader";

function ProjectsSection({ projects }) {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  const onTouchStart = (event) => {
    startX.current = event.changedTouches[0].clientX;
  };

  const onTouchEnd = (event) => {
    const delta = event.changedTouches[0].clientX - startX.current;
    if (delta < -45) {
      setActive((prev) => Math.min(prev + 1, projects.length - 1));
    } else if (delta > 45) {
      setActive((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section
      className="py-14 sm:py-20"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <SectionHeader
        eyebrow="Projects"
        title="Recent builds with product-level polish"
        description="Swipe cards on mobile, hover on desktop, and open source architecture in every launch."
      />

      <div className="mb-4 flex gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-8 rounded-full transition ${active === i ? "bg-cyan-300" : "bg-slate-700"}`}
            onClick={() => setActive(i)}
            aria-label={`Open project ${i + 1}`}
          />
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`overflow-hidden rounded-2xl border bg-white/5 shadow-card backdrop-blur-md transition ${active === index ? "border-cyan-300/50" : "border-white/15"}`}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-lg border border-amber-300/60 bg-amber-300/20 px-3 py-2 text-xs font-semibold text-amber-100 transition hover:bg-amber-300/35"
              >
                Visit Project
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
