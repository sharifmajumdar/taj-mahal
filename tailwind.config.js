/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure all relevant file types are included
  darkMode: "class", // Enable dark mode via class strategy
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"], // Add Raleway font
        signature: ["Great Vibes"], // Signature font
      },
    },
  },
  plugins: [],
};
