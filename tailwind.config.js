/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Kodchasan: ["Kodchasan"]
      },
      colors: {
        Primary: ["#0ea5e9"],
        scondary: ["#334155"]
      }
    },
  },
  plugins: [],
}
