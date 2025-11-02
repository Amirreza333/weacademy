module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui'],
        display: ['Vazirmatn', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}