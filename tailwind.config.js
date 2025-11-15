/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#18181B",
        accentBlue: "#3B82F6",
        offwhite: "#F8FAFC",
        gray600: "#4B5563",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },

  plugins: [],
};
