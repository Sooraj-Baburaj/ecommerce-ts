import { type CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      black:
        "border border-transparent bg-black text-white enabled:hover:bg-black-75 dark:bg-black-25 dark:enabled:hover:bg-black-75",
      transparent:
        "border border-transparent bg-transparent text-black enabled:hover:text-primary dark:bg-black-25 enabled:hover:text-primary",
    },
    pill: {
      off: "",
    },
  },
};

export default customTheme;
