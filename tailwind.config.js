/** @type {import('tailwindcss').Config} */
const config = require('./config/index.js')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: config.theme,
  plugins: config.plugins,
}
