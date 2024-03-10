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
        "tsoft": "#b7bac1",
        "bgsoft": "#182237",
        "bg": "#151c2c",
        "t": "white",
      },
    },    
  },
  plugins: [],
};
export default config;
