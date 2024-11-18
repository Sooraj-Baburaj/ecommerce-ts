import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";

import logodecorater from "../../assets/svgs/logo-decorater.svg";
import Login from "../Login";
import { RiHeart3Line, RiSearchLine } from "react-icons/ri";
import { FaUserClock } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = async () => {
  return (
    <div>
      <div className="w-full flex justify-between pt-[17px] pb-[25px] px-12">
        {/* Logo */}
        <div className="flex space-x-2 items-center">
          <Image src={logodecorater} alt="logo" />
          <h1 className="text-[24px]">CORAL</h1>
          <Image src={logodecorater} alt="logo" />
        </div>
        {/* Nav */}
        <div className="flex space-x-8 items-center *:font-medium">
          <Link href={"/"} className="hover:text-primary transition-all">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-primary transition-all">
            Shop
          </Link>
          <Link href={"/about"} className="hover:text-primary transition-all">
            About
          </Link>
          <Link href={"/contact"} className="hover:text-primary transition-all">
            Contact
          </Link>
        </div>
        {/* Menu Links */}
        <div className="h-full flex">
          <Suspense
            fallback={
              <Button color="transparent" size="sm">
                <FaUserClock className="mr-2 h-4 w-4" />
                <span>Authenticating</span>
              </Button>
            }
          >
            <Login iconOnly />
          </Suspense>
          <Button color="transparent" size="md">
            <RiSearchLine className="mr-2 h-5 w-5" />
          </Button>
          <Button color="transparent" size="md">
            <RiHeart3Line className="mr-2 h-5 w-5" />
          </Button>
          <Button color="transparent" size="md">
            <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
