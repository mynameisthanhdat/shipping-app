/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Sampled from the Bee Direct logo artwork: a deep amber-gold against a
         * slightly blue-tinted charcoal, rather than the lemon yellow and flat
         * black they replace — the two now read as one palette.
         *
         * Yellow is still a light colour, so it only works as a FILL. White on
         * it is 2.0:1. Pair `bg-brand` with `text-ink` (8.4:1) and reach for
         * `brand-deep` whenever the brand colour has to be text or a border on
         * a light surface (5.9:1 on white).
         */
        ink: {
          DEFAULT: '#1c1c22',
          light: '#33333d',
        },
        brand: {
          /** Fills: buttons, badges, active pills. Always with ink text. */
          DEFAULT: '#f5a623',
          hover: '#de9418',
          /** Text and borders on light surfaces. */
          deep: '#8a5a0b',
          'deep-hover': '#6b4508',
          /** Tinted surface for selected states and callouts. */
          soft: '#fef4e2',
          /** Wing / speed-line gradient ends, logo artwork only. */
          light: '#ffc93c',
          dark: '#f5861e',
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
        card: '0 4px 16px rgba(28, 28, 34, 0.10)',
        /** Soft lift under a primary action, tinted to the brand colour. */
        brand: '0 6px 18px rgba(245, 166, 35, 0.38)',
      },
    },
  },
  plugins: [],
}
