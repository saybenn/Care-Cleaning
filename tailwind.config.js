/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App router
    "./pages/**/*.{js,ts,jsx,tsx}", // Page router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "640px",
      md: "820px", // ← you've changed it here!
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#ffb6bd",
        secondary: "#65a3ff",
        accent: "#066f94",
        background: "#fdf7f7",
        slateblue: "#497a92",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
