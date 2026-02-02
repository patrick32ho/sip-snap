import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        splash: {
          50: "#f5fbff",
          100: "#e6f6ff",
          200: "#cbeaff",
          500: "#3aa7ff",
          700: "#1e7fd6",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(20, 80, 140, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
