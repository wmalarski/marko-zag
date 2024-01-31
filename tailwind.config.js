/** @type {import('tailwindcss').Config} */
const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,marko}"],
  theme: { extend: {} },
  plugins: [require("daisyui"), parkwindPlugin],
  darkMode: ['class'],
};
