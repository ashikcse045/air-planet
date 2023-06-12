/** @type {import('tailwindcss').Config} */
// font-family: 'Inter', sans-serif;
// font-family: 'Poppins', sans-serif;

module.exports = {
  content: ["./dist/**/*.{html,js,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#00D58B',
        secondary: '#707070',
        tertiary: '#B8F3DF',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}