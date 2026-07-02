import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: require("tailwindcss/colors").blue,
        brand: {
          blue: {
            DEFAULT: '#1E3A8A', // blue-900 (Biru tua klasik)
            light: '#1D4ED8',   // blue-700
            dark: '#172554',    // blue-950
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F59E0B',
          }
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
