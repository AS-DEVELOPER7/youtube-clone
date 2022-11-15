/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        text1: "#f5f5f5",
        text2: "rgb(148 163 184)",
        loading: "rgb(51, 65, 85)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
