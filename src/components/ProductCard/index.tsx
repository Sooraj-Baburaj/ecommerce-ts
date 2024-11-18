import React, { useMemo } from "react";
import Image from "next/image";

import { ProductType } from "@/src/types/product";
import Link from "next/link";

interface ProductCardPropTypes {
  data: ProductType;
}

const ProductCard = ({ data }: ProductCardPropTypes) => {
  const originalPrice = useMemo(() => {
    return (100 / (100 - data.discountPercentage)) * data.price;
  }, []);
  return (
    <Link href={`/shop/${data.id}`}>
      <div className="h-[478px] cursor-pointer">
        <figure className="relative h-[400px] bg-dark-5">
          <Image
            src={data.thumbnail}
            alt={data.title}
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <div className="px-[10px] pt-[10px] h-[78px]">
          <h6 className="font-semibold  text-ellipsis ">{data.title}</h6>
          <div className="flex justify-between mt-4">
            <span className="text-[16px] font-normal text-dark-50 capitalize">
              {data.category}
            </span>
            <span>
              <span className="text-black-50 mr-2 line-through">
                {originalPrice.toFixed(2)}
              </span>
              {data.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
