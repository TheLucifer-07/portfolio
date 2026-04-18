/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        primary: "#0A0A0A",
        secondary: "#52525B",
        accent: "#8B5E3C",
        accentLight: "#b59067",
      },
    },
  },
  plugins: [],
};