"use client";
import Image from "next/image";
import React from "react";
import useProductImages from "./useProductImages";

const ProductImages = ({ images }: { images: string[] }) => {
  const { activeImageIndex, setActiveImageIndex } = useProductImages();
  return (
    <div className="flex">
      <div className="w-1/5">
        {images.map((image, index) => (
          <figure
            className="w-16 h-16 relative bg-primary-10 rounded-xl mb-6"
            key={index}
            onMouseOver={() => setActiveImageIndex(index)}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              layout="fill"
              objectFit="contain"
            />
          </figure>
        ))}
      </div>
      <div className="w-4/5">
        <figure className="relative bg-primary-10 w-full h-[500px] rounded-2xl">
          <Image
            src={images[activeImageIndex]}
            alt={`image-[${activeImageIndex}]`}
            layout="fill"
            objectFit="contain"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductImages;
