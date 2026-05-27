import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        heading: ["'Syne'", "sans-serif"],
      },
      colors: {
        accent: "#00f5c4",
        accent2: "#7b61ff",
        accent3: "#ff6b6b",
      },
    },
  },
  plugins: [],
};

export default config;
