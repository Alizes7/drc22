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
        brass: {
          light: "#E5C788",
          DEFAULT: "#C9A573",
          deep: "#8B6F3F",
        },
        ink: {
          DEFAULT: "#08080A",
          1: "#0D0D0F",
          2: "#111113",
          3: "#161618",
        },
        hairline: {
          DEFAULT: "#232024",
          strong: "#2E2A2D",
        },
        parchment: {
          DEFAULT: "#F3EFE6",
          2: "#DCD5C6",
          muted: "#9B9388",
          faint: "#5C5750",
        },
        // legacy aliases kept so any untouched class names still resolve
        gold: {
          50: "#FBF6EC",
          100: "#F0E2C4",
          200: "#E5C788",
          300: "#D9B87E",
          400: "#CEB078",
          500: "#C9A573",
          600: "#B79363",
          700: "#9C7F54",
          800: "#8B6F3F",
          900: "#6E5731",
        },
        black: {
          900: "#08080A",
          800: "#0D0D0F",
          700: "#111113",
          600: "#161618",
          500: "#1B1B1E",
          400: "#212022",
          300: "#232024",
          200: "#2E2A2D",
          100: "#3A3537",
        },
        cream: {
          100: "#F3EFE6",
          200: "#DCD5C6",
          300: "#C7BFAE",
          400: "#B0A799",
          500: "#9B9388",
          600: "#7A7268",
          700: "#5C5750",
          800: "#3A3732",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,165,115,0.2)" },
          "50%": { boxShadow: "0 0 0 15px rgba(201,165,115,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
