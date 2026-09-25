import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F8F5FF",
          100: "#EDE6FF",
          200: "#D8C8F8",
          400: "#B69AF7",
          500: "#9068F0",
          600: "#7750D4",
          900: "#38266D",
        },
        ink: "#17151D",
        muted: "#5E5968",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(74, 48, 133, 0.13)",
        card: "0 10px 35px rgba(36, 27, 56, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
