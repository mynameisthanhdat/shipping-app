/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#152a47',
          light: '#1d3557',
        },
        brand: {
          DEFAULT: '#e2683c',
          hover: '#cf5a30',
        },
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
}
