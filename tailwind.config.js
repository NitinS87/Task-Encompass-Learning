/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image:
          'url("https://mymemorymentor.com/wp-content/uploads/2022/12/mymemorymentor.png")',
      },
    },
  },
  plugins: [],
};
