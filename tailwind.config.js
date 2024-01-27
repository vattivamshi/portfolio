/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors:{
      primaryBgLight: '#F6F1EE',
      primaryBgDark:'#121212',
      secondaryBgLight: '#f5f6f9',
      secondaryBgDark: '#171717',
      tertiaryBgLight: '#eceff8',
      tertiaryBgDark: '#1e1e1e',
      accentOrange: '#ED7D31',
      primaryTextLight: '#4F4A45',
      secondaryTextLight: '#6C5F5B',
      primaryTextDark: '#E9E9E9',
      secondaryTextDark: '#BEBEBE'
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
