import React from "react";
import Image from "next/image";
import logoOne from "../../../assets/images/home/brands/01.png";
import logoTwo from "../../../assets/images/home/brands/02.png";
import logoThree from "../../../assets/images/home/brands/03.png";
import logoFour from "../../../assets/images/home/brands/04.png";
import logoFive from "../../../assets/images/home/brands/05.png";

const HomeBrands = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-between mt-[90px] px-5 max-w-[--home-max-width] mx-auto">
        <Image src={logoOne} alt="logo One" />
        <Image src={logoTwo} alt="logo Two" />
        <Image src={logoThree} alt="logo Three" />
        <Image src={logoFour} alt="logo Four" />
        <Image src={logoFive} alt="logo Five" />
      </div>
    </div>
  );
};

export default HomeBrands;
