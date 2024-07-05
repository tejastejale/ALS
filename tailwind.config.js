const flowbite = require("flowbite-react/tailwind");
// const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
