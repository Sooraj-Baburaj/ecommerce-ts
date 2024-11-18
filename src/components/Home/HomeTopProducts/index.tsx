import Image from "next/image";
import React from "react";

import cardOne from "../../../assets/images/home/top-categories/card-1.png";
import cardTwo from "../../../assets/images/home/top-categories/card-2.png";
import cardThree from "../../../assets/images/home/top-categories/card-3.png";
import cardFour from "../../../assets/images/home/top-categories/card-4.png";
import cardFive from "../../../assets/images/home/top-categories/card.png";

const HomeTopProducts = async () => {
  return (
    <div className="mt-[90px] max-w-[--home-max-width] mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className="absolute -left-[34px] top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
          <span className=" text-[30px] leading-[25px]">
            EXPLORE NEW AND POPULAR STYLES
          </span>
        </div>
        <div className="row-span-2 col-span-2 md:col-span-1 md:row-span-2 ">
          <figure className="overflow-hidden">
            <Image
              className="hover:scale-[1.1] transition-[0.3ms] cursor-pointer"
              src={cardOne}
              alt="women in dress"
            />
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <figure className="overflow-hidden">
            <Image
              className="hover:scale-[1.1] transition-[0.3ms] cursor-pointer"
              src={cardTwo}
              alt="women in dress"
            />
          </figure>

          <figure className="overflow-hidden">
            <Image
              className="hover:scale-[1.1] transition-[0.3ms] cursor-pointer"
              src={cardThree}
              alt="women in dress"
            />
          </figure>

          <figure className="overflow-hidden">
            <Image
              className="hover:scale-[1.1] transition-[0.3ms] cursor-pointer"
              src={cardFour}
              alt="women in dress"
            />
          </figure>

          <figure className="overflow-hidden">
            <Image
              className="hover:scale-[1.1] transition-[0.3ms] cursor-pointer"
              src={cardFive}
              alt="women in dress"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HomeTopProducts;
