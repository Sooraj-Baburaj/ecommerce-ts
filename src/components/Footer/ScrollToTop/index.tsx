import React from "react";
import { Button } from "flowbite-react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <Button color="transparent" size="sm">
      <FaArrowUp color="white" className="mr-2 h-4 w-4" />
      <span className="text-white">Scroll To Top</span>
    </Button>
  );
};

export default ScrollToTop;
