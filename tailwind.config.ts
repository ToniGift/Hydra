import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hydra: {
          blue: "#1B4FD8",
          "blue-dark": "#1640B8",
          navy: "#080F1E",
          "navy-mid": "#0D1A35",
          gold: "#E8A020",
          "gold-light": "#F5C842",
          steel: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-navy": "linear-gradient(rgba(27,79,216,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(27,79,216,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "slide-down": "slideDown 0.2s ease-out",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
