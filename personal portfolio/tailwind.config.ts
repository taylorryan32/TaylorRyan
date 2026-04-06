import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: "#f7d6e0",
          deep: "#efb8c7",
        },
        sage: {
          DEFAULT: "#c7d9c4",
          deep: "#96b697",
        },
        cream: {
          DEFAULT: "#fdf8f6",
          panel: "#fffdfc",
        },
        charcoal: {
          DEFAULT: "#2f2f2f",
          soft: "#4d4d4d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(47, 47, 47, 0.15)",
        lift: "0 18px 40px -18px rgba(47, 47, 47, 0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
