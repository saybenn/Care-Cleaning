module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffb6bd", // Main pink
        secondary: "#65a3ff", // Light blue
        accent: "#066f94", // Deep teal
        background: "#fdf7f7", // Soft cream
        slateblue: "#497a92", // Text-friendly slate blue
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
