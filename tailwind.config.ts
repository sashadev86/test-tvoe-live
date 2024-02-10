import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(90.00deg, rgb(106, 17, 203), rgb(37, 117, 252) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
