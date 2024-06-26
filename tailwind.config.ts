import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import { shortPulsesCss } from "./custom-tailwind/short-pulse-animation";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'short-pulse-create': 'colored-pulse-create 2s cubic-bezier(0.4, 0, 0.6, 1) 2',
        'short-pulse-update': 'colored-pulse-update 2s cubic-bezier(0.4, 0, 0.6, 1) 2',
        'short-pulse-delete': 'colored-pulse-delete 2s cubic-bezier(0.4, 0, 0.6, 1) 2'
      },
      keyframes: {
        'colored-pulse-create': {
          '0%, 100%': {
            'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
          },
          '50%': {
            'background-color': '#0E793C',
          },
        },
        'colored-pulse-update': {
          '0%, 100%': {
            'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
          },
          '50%': {
            'background-color': '#004493',
          },
        },
        'colored-pulse-delete': {
          '0%, 100%': {
            'background-color': 'hsl(hsl(240 5.88% 10% / 1))',
          },
          '50%': {
            'background-color': '#920B3A',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
