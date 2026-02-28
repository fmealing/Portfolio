/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // IBM Plex Mono everywhere — sans and mono both resolve to it.
        // Weight contrast (300 → 600) handles all typographic hierarchy.
        sans: ["var(--font-mono)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
