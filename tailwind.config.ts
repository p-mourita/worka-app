import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        worka: {
          purple: "#6B4EFF", // adjust to match your exact brand later
          black: "#111111",
          gray: "#F5F5F7"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        card: "0 14px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
