/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [],
}

