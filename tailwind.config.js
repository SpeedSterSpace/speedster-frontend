/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ground: "url('/assets/ground.png')",
        slider: "url('/assets/slider.png')",
      },
      colors: {
        primary: "#E55E43",
        secondary: "#FBD838",
      },
    },
  },
  plugins: [],
};
