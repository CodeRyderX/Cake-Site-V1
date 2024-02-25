/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        "gold": {
          "primary" : "amber"
        },
      },
    },
  },
  plugins: [],
}