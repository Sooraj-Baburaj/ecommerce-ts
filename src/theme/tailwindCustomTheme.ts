import { type CustomThemeConfig } from "tailwindcss/types/config";

const customTailwindTheme: Partial<CustomThemeConfig> = {
  colors: {
    primary: {
      DEFAULT: "#FF6F61",
      75: "rgba(255, 111, 97, 0.75)",
      50: "rgba(255, 111, 97, 0.5)",
      25: "rgba(255, 111, 97, 0.25)",
      10: "rgba(255, 111, 97, 0.1)",
      5: "rgba(255, 111, 97, 0.05)",
    },
    black: {
      DEFAULT: "#1E2832",
      75: "rgba(30, 40, 50, 0.75)",
      50: "rgba(30, 40, 50, 0.5)",
      25: "rgba(30, 40, 50, 0.25)",
      10: "rgba(30, 40, 50, 0.1)",
      5: "rgba(30, 40, 50, 0.05)",
    },
    white: {
      DEFAULT: "#FFFFFF",
      75: "rgba(255, 255, 255, 0.75)",
      50: "rgba(255, 255, 255, 0.5)",
      25: "rgba(255, 255, 255, 0.25)",
      10: "rgba(255, 255, 255, 0.1)",
      5: "rgba(255, 255, 255, 0.05)",
    },
    dark: {
      DEFAULT: "#000000",
      75: "rgba(0, 0, 0, 0.75)",
      50: "rgba(0, 0, 0, 0.5)",
      25: "rgba(0, 0, 0, 0.25)",
      10: "rgba(0, 0, 0, 0.1)",
      5: "rgba(0, 0, 0, 0.05)",
    },
    stroke: {
      DEFAULT: "#E3E3E3",
    },
  },
};

export default customTailwindTheme;
