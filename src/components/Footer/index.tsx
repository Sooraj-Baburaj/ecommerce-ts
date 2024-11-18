import React from "react";
import Image from "next/image";

import logodecorater from "../../assets/svgs/logo-decorater.svg";
import paymentsImg from "../../assets/images/home/footer/payments.png";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[--home-max-width] w-full mx-auto my-[70px]">
        <div className="mb-4">
          <div className="flex space-x-2 mb-4">
            <Image src={logodecorater} alt="logo" />
            <h1 className="text-[28px]">CORAL</h1>
            <Image src={logodecorater} alt="logo" />
          </div>
          <span className="text-dark-50 text-[12px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div>
          <h6>Catalog</h6>
          <ul className="text-dark-50 text-[16px] font-light mt-4">
            <li>Necklaces</li>
            <li>Hoodies</li>
            <li>Jewelry Box</li>
            <li>T-Shirt</li>
            <li>Jacket</li>
          </ul>
        </div>
        <div>
          <h6>About Us</h6>
          <ul className="text-dark-50 text-[16px] font-light mt-4">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h6>Customer Services</h6>
          <ul className="text-dark-50 text-[16px] font-light mt-4">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book An Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-black">
        <span className="text-white">© 2022 Coral , Inc.</span>
        <Image src={paymentsImg} alt="payments" />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Footer;
