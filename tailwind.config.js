/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black: "#000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
