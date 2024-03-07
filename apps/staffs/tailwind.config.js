/** @type {import('tailwindcss').Config} */
const { raitonTailwindConfigWrapper } = require('@axazara/raiton-utils');

module.exports = raitonTailwindConfigWrapper({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  extends: {
    colors: {
      'zinc-100': '#f4f4f5',
      'zinc-200': '#fafafa',
      'zinc-300': '#d4d4d8',
    },
  },
});
