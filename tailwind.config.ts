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
        salesforce: {
          "50": "#f0f7ff",
          "100": "#e0effe",
          "200": "#badffd",
          "300": "#7cc6fd",
          "400": "#37a9f9",
          "500": "#0d8eea",
          "600": "#0176d3",
          "700": "#0259a2",
          "800": "#064c86",
          "900": "#0b406f",
          "950": "#082849",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
