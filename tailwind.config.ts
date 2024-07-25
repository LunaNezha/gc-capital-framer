import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        broom: {
          "50": "#fdfee8",
          "100": "#fcffc2",
          "200": "#fdff87",
          "300": "#fffb43",
          "400": "#ffed05", // main color
          "500": "#efd403",
          "600": "#cea700",
          "700": "#a47804",
          "800": "#885d0b",
          "900": "#734c10",
          "950": "#432805",
        },
        toledo: {
          "50": "#fbf4f8",
          "100": "#f8ebf2",
          "200": "#f3d7e7",
          "300": "#ebb6d3",
          "400": "#dd89b5",
          "500": "#cf6599",
          "600": "#bb477b",
          "700": "#a13562",
          "800": "#852f52",
          "900": "#702b47",
          "950": "#36101f", // main color
        },
        "flush-mahogany": {
          "50": "#fdf3f3",
          "100": "#fce4e4",
          "200": "#f9cfcf",
          "300": "#f4adad",
          "400": "#ec7d7e",
          "500": "#e05354",
          "600": "#cc3738", // main color
          "700": "#ab2a2b",
          "800": "#8e2627",
          "900": "#762627",
          "950": "#400f0f",
        },
      },
      fontFamily: {
        "bowlby-one": ['"Bowlby One"', ...defaultTheme.fontFamily.sans],
        "azeret-mono": ['"Azeret Mono"', ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        default: "7px 1px 0px #AD0F02",
      },
      textStroke: {
        "21": "1px",
        "2": "2px",
        "4": "4px",
      },
    },
  },
  variants: {
    extend: {
      textShadow: ["responsive", "hover", "focus"],
      textStroke: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-shadow-default": {
          textShadow: "7px 1px 0px #AD0F02",
        },
        ".text-stroke-1": {
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#AD0F02",
        },
        ".text-stroke-4": {
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#AD0F02",
        },
        ".text-stroke-2": {
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#AD0F02",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
