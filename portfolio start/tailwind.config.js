/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppings: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        image1: "url('../myself1 3.jpeg')",
        image2: "url('../image 1.2 1.jpeg')",
        image3: "url('../image 1.2 2.jpeg')",
        image4: "url('../image 1.2 3.jpeg')",
      },
    },
  },
  plugins: [],
};
