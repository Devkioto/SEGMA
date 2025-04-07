/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'cm': "0 10px 35px rgb(131, 8, 31)", // custom box shadow
      },
    },
  },
  plugins: [],
};
