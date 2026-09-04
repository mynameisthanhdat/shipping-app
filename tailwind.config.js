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
        muted: {
          DEFAULT: '#666666',
          surface: '#d9d9d9',
          /** Placeholder / empty-state text — deliberately lighter than body copy
           *  so an unfilled field never reads as filled in. */
          placeholder: '#a8adb8',
        },
        /** Restricted / dangerous-goods callout. White text on DEFAULT is 5.4:1. */
        danger: {
          DEFAULT: '#c0392b',
          surface: '#fdf3f1',
          border: '#f0c4bd',
        },
        /** Completed / active wizard step. */
        success: '#3fb984',
        /** Upcoming wizard step. */
        step: '#5f6b7a',
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(21, 42, 71, 0.08)',
      },
    },
  },
  plugins: [],
}
