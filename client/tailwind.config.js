/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '282': '282px',
        '160': '160px',
        '24': '24px',
        '343': '343px',
      },
    },
  },
  plugins: [],
}

