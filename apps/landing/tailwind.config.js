/** @type {import('tailwindcss').Config} */
const { raitonTailwindConfigWrapper } = require('@axazara/raiton-utils');

module.exports = raitonTailwindConfigWrapper({
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
});
