import React from "react";
import { Button } from "flowbite-react";
import { MdOutlineStarPurple500 } from "react-icons/md";

import { ProductType } from "@/src/types/product";
import { capitalizeFirstLetter } from "@/src/utils/functions/strings";

const ProductDesciption = ({ data }: { data: ProductType }) => {
  const ratings = Math.ceil(data.rating);
  return (
    <div>
      <div className="border-b-[2px] border-stroke pb-14">
        <div className="w-4/5">
          <h1 className="text-[42px] font-normal overflow-hidden whitespace-nowrap text-ellipsis ">
            {data.title}
          </h1>
          <div>
            <span className="text-[#9F9F9F] font-medium text-[24px] mr-2">
              Rs.{" "}
              {new Intl.NumberFormat("en-IN").format(
                Math.ceil(data.price * 80)
              )}
            </span>
          </div>
          <div className="flex space-x-4 divide-x-2 divide-[#9F9F9F] items-center mt-3">
            <div className="flex space-x-1">
              {[...Array(ratings)].map((_) => (
                <MdOutlineStarPurple500 className="text-[#FFC700] h-5 w-5" />
              ))}
              {[...Array(5 - ratings)].map((_) => (
                <MdOutlineStarPurple500 className="text-[#9F9F9F] h-5 w-5" />
              ))}
            </div>
            <div className="text-[13px] text-[#9F9F9F] font-normal pl-4">
              {data.reviews.length} Customer Reviews
            </div>
          </div>
          <p className="text-[13px] mt-3">{data.description}</p>
        </div>
        <div className="flex space-x-3 mt-5">
          <Button
            className="border-2 border-[#9F9F9F] rounded-lg px-10"
            color="transparent"
            size="lg"
          >
            Buy Now
          </Button>
          <Button
            className="border-2 border-[#9F9F9F] rounded-lg px-10"
            color="transparent"
            size="lg"
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <div className=" py-7 text-[#9F9F9F] *:py-1 flex *:flex *:flex-col *:flex-1">
        <div className="max-w-[100px]">
          <span className="min-w-10">SKU</span>
          <span className="min-w-10">Category</span>
          <span className="min-w-10">Tags</span>
        </div>
        <div className="flex-grow-[2]">
          <span>: {data.sku}</span>
          <span className="capitalize">: {data.category}</span>
          <span>
            {`: ${data.tags.reduce(
              (acc, curr, index) =>
                `${acc}${index !== 0 ? "," : ""}${capitalizeFirstLetter(curr)}`,
              ""
            )}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDesciption;
