/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#159cbd", // Couleur primaire
        secondary: "#c2f3ff", // Couleur secondaire
        tertiary: "#d4f3f9",
      },
    },
  },
  plugins: [],
};
