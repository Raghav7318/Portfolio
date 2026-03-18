# Neon Cyberpunk Developer Portfolio

Modern, animated developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features Implemented

- Neon cyberpunk visual direction with glow accents, gradients, and glassmorphism cards
- Mobile-first responsive layout across all sections
- Scroll reveal animations, hover motion, and parallax background movement
- Custom cursor glow/trail on pointer devices
- Touch-friendly project card navigation with swipe gestures on mobile
- Ripple tap animation on action buttons
- Loading screen animation at app start
- Theme toggle between `neon` and `pulse` variants
- Scroll progress indicator at top of viewport
- Optional subtle sound toggle (Web Audio API beep)
- Contact form with client-side validation
- Lazy-loaded project images via `loading="lazy"`
- Reduced-motion fallback for accessibility/performance

## Project Structure

```text
raghavPortfolio/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  src/
    App.jsx
    data.js
    index.css
    main.jsx
    components/
      AnimatedBackground.jsx
      CustomCursor.jsx
      LoadingScreen.jsx
      ScrollProgress.jsx
      SoundToggle.jsx
      ThemeToggle.jsx
      ui/
        RippleButton.jsx
        SectionHeader.jsx
      sections/
        AboutSection.jsx
        ContactSection.jsx
        ExperienceSection.jsx
        FooterSection.jsx
        HeroSection.jsx
        ProjectsSection.jsx
        SkillsSection.jsx
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Notes

- The project uses runtime-safe browser APIs and no server dependencies.
- If your npm environment blocks commands due folder naming/policy constraints, open this project in a lowercase path and rerun the commands.
