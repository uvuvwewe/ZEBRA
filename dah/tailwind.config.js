const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        ...colors,

        /**
         * Swap out the color sets, or create your own from
         * Tailwinds vast color library to pick from
         * https://tailwindcss.com/docs/customizing-colors
         **/
        // primary: colors.pink,
        // secondary: colors.fuchsia,
        // tertiary: colors.red,
        // accent: colors.violet,
        // violator: colors.rose,

        primary: colors.slate,
        secondary: colors.blue,
        tertiary: colors.violet,
        accent: colors.teal,
        violator: colors.rose,
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
        48: '48px',
        60: '60px',
        80: '80px',
      },
    },
  },
  plugins: [],
};
