/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        // Backgrounds
        cream: {
          DEFAULT: '#FBF6EC', // page background
          50: '#FFFDF8', // card / surface background
          100: '#F0E7D6', // sand - alt section background
        },
        // Borders / dividers
        hairline: '#E4D7BE',

        // Brand / accent (bronze)
        bronze: {
          DEFAULT: '#8A5A2B', // primary accent - buttons, links, icons
          hover: '#6E4520', // hover / active state
          light: '#A9773F', // optional lighter tint for badges, tags
        },

        // Dark / text tones
        espresso: {
          DEFAULT: '#4A3218', // headings, dark surfaces (navbar/footer)
          light: '#6B4A26',
        },
        charcoal: '#3A2E22', // body text
        muted: '#8C7B65', // secondary / muted text

        // Status colors (warm-toned, on-brand)
        success: '#6B8E4E',
        danger: '#B5502F',
      },
    },
  },
  plugins: [],
};
