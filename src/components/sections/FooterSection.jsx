function FooterSection({ socials }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/45 py-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Raghav Kumar. Crafted with React +
          Tailwind + Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
