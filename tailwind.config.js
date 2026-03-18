/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          bg: "#07080d",
          surface: "#0d1020",
          panel: "#141934",
          cyan: "#00e7ff",
          blue: "#4d7dff",
          pink: "#ff2ad4",
          violet: "#9f68ff",
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 231, 255, 0.35), 0 0 35px rgba(255, 42, 212, 0.25)",
        card: "0 20px 45px rgba(2, 6, 30, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
