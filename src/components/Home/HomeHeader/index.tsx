import React, { Suspense } from "react";
import Image from "next/image";

import logodecorater from "../../../assets/svgs/logo-decorater.svg";

import Login from "../../Login";
import { FaSearch, FaShoppingBag, FaUserClock } from "react-icons/fa";
import { Button } from "flowbite-react";
import Navbar from "./NavBar";

const HomeHeader = async () => {
  return (
    <div>
      <div className="w-full flex justify-between pt-[17px] pb-[25px] border-b-[1px] border-stroke">
        {/* Search */}
        <div>
          <Button color="transparent ">
            <FaSearch className="h-4 w-4 " />
          </Button>
        </div>
        {/* Logo */}
        <div className="flex space-x-2">
          <Image src={logodecorater} alt="logo" />
          <h1 className="text-[28px]">CORAL</h1>
          <Image src={logodecorater} alt="logo" />
        </div>
        {/* Menu Links */}
        <div className="h-full flex items-center">
          <Suspense
            fallback={
              <Button color="transparent" size="sm">
                <FaUserClock className="mr-2 h-4 w-4" />
                <span>Authenticating</span>
              </Button>
            }
          >
            <Login />
          </Suspense>
          <Button color="transparent" size="sm">
            <FaShoppingBag className="mr-2 h-4 w-4" />
            <span>Shopping</span>
          </Button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomeHeader;
