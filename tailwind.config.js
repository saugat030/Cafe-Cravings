/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Anton: ["Anton", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Edu: ["Edu AU VIC WA NT Hand", "cursive"],
    },
    extend: {
      colors: {
        primary: "#F6EBDA",
        secondary: "#2f2105",
        ternary: "#F5FEFD",
      },
    },
  },
  plugins: [],
};
