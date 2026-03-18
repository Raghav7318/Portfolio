import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import SoundToggle from "./components/SoundToggle";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import { experience, projects, skills, socials } from "./data";

const sectionTransition = {
  hidden: { opacity: 0, y: 42, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "neon",
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "neon" ? "pulse" : "neon"));
  };

  const navItems = useMemo(
    () => ["home", "about", "skills", "projects", "experience", "contact"],
    [],
  );

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-100">
      <AnimatedBackground theme={theme} />
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {loading ? <LoadingScreen key="loader" /> : null}
      </AnimatePresence>

      {!loading ? (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <a
                href="#home"
                className="text-sm font-semibold tracking-[0.24em] text-white"
              >
                RAGHAV.dev
              </a>

              <nav className="hidden items-center gap-5 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-xs uppercase tracking-[0.18em] text-slate-300 transition hover:text-cyan-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <SoundToggle />
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
            <motion.section
              id="home"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <HeroSection />
            </motion.section>

            <motion.section
              id="about"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <AboutSection />
            </motion.section>

            <motion.section
              id="skills"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <SkillsSection skills={skills} />
            </motion.section>

            <motion.section
              id="projects"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectsSection projects={projects} />
            </motion.section>

            <motion.section
              id="experience"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <ExperienceSection experience={experience} />
            </motion.section>

            <motion.section
              id="contact"
              variants={sectionTransition}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactSection />
            </motion.section>
          </main>

          <FooterSection socials={socials} />
        </motion.div>
      ) : null}
    </div>
  );
}

export default App;
