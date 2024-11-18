import Image from "next/image";
import React from "react";

import bannerImg from "../../../assets/images/home/banner/banner.png";
import bannerRectangleImg from "../../../assets/images/home/banner/rectangle.png";
import HomeHeader from "../HomeHeader";
import { Button } from "flowbite-react";
import { FaShoppingBag } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className=" w-full bg-black-5">
      <div className="h-full px-5 max-w-[--home-max-width] mx-auto">
        <HomeHeader />

        <div className="flex my-[70px]">
          <div className="w-7/12 space-y-[62px]">
            <div className="space-y-[52px] mt-[75px]">
              <h1 className="text-[74px] font-light leading-[55px]">
                Collections
              </h1>
              <p className="text-[30px] font-light">
                You can explore and shop many different collections from various
                brands here.
              </p>
            </div>
            <div>
              <Button color="black" size="xl">
                <FaShoppingBag color="white" className="mr-2 h-5 w-5" />
                <span>Shop Now</span>
              </Button>
            </div>
          </div>
          <div className="w-5/12 flex justify-center items-center">
            <figure className="relative">
              <Image
                className="relative z-10"
                src={bannerImg}
                alt="Banner Image"
                quality={100}
              />
              <Image
                className="z-0 absolute bottom-[-20px] right-[-18px]"
                src={bannerRectangleImg}
                alt="Banner Frame"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
