import React from "react";
import useNavbar from "./useNavbar";
import { Button } from "flowbite-react";
import Link from "next/link";

const Navbar = () => {
  const { navItems } = useNavbar();
  return (
    <div className="flex justify-between mt-[25px]">
      {navItems.map((navItem, index) => (
        <Button
          key={index}
          size="xs"
          color="transparent"
          as={Link}
          href={navItem.href}
        >
          {navItem.label}
        </Button>
      ))}
    </div>
  );
};

export default Navbar;
