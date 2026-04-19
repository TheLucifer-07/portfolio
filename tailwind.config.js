/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        primary: "#0A0A0A",
        secondary: "#52525B",
        accent: "#8B5E3C",
        accentLight: "#b59067",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(139, 94, 60, 0.08), 0 2px 10px rgba(10, 10, 10, 0.04)",
        luxury: "0 18px 48px rgba(139, 94, 60, 0.12), 0 8px 20px rgba(10, 10, 10, 0.06)",
        glow: "0 0 0 1px rgba(181, 144, 103, 0.18), 0 24px 60px rgba(139, 94, 60, 0.14)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
