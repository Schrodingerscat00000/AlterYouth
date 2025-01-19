/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all JavaScript/TypeScript files in the `app/` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include files in the `pages/` directory if used
    "./components/**/*.{js,ts,jsx,tsx}", // Include files in `components/` if used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
