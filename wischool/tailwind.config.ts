import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#09B451",
          700: "#3BD27B"
        },
        sky: {
          800: "#DDFFFF",
          700: "#E4FFFF"
        },
        red: {
          800: "#6A0000"
        },
        gray: {
          800: "#333333",
          700: "#A3A3A3",
          600: "#C4C4C4"
        }
      },
    },
  },
  plugins: [],
};
export default config;
