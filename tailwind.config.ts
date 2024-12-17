import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInTop: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInBottom: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeInTop: "fadeInTop 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInBottom: "fadeInBottom 1s ease-in-out",
      },
    },
    fontFamily: {
      gms: ["var(--font-gms)"],
      pretendard: ["var(--font-pretendard"],
    },
    // fontFamily: {
    //   Archivo: ["'Archivo Black'", "sans-serif"],
    //   fantasy: ["fantasy"],
    // },
  },
  plugins: [],
};

export default config;
