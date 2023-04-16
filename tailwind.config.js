/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#6985C0",
          300: "#7997c9",
          200: "#89aad3",
          100: "#99bcdc",
        },
      },
    },
  },
  plugins: [],
};
