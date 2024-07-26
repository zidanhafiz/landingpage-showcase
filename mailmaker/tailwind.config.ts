import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#202020",
        "blue-violet": "#6d23ff",
        "medium-sea-green": "#3cb265",
        "white-smoke": "#f9f9f9",
        "line-white": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;
