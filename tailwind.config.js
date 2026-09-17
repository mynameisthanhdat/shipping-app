/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Bee Direct palette: honey yellow + near black.
         *
         * Yellow is a light colour, so it only works as a FILL. White text on
         * it sits at 1.7:1 — unreadable. Pair `bg-brand` with `text-ink`
         * (10.8:1) and use `brand-deep` whenever the brand colour has to be
         * text or a border on a light surface.
         */
        ink: {
          DEFAULT: '#141414',
          light: '#2f2f2f',
        },
        brand: {
          /** Fills: buttons, badges, active pills. Always with ink text. */
          DEFAULT: '#f6be00',
          hover: '#e0a800',
          /** Text and borders on light surfaces — 6.3:1 on white. */
          deep: '#7a5c00',
          'deep-hover': '#5c4500',
          /** Tinted surface for selected states and callouts. */
          soft: '#fff8e1',
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
        /** Upcoming wizard step. Reached steps use `brand`. */
        step: '#575757',
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(21, 42, 71, 0.08)',
        /** Soft lift under a primary action, tinted to the brand colour. */
        brand: '0 6px 18px rgba(226, 104, 60, 0.28)',
      },
    },
  },
  plugins: [],
}
