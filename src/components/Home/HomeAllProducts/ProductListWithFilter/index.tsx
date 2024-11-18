"use client";

import React from "react";
import useProductsListWithFilter, {
  allFilters,
} from "./useProductsListWithFilter";
import { Button } from "flowbite-react";
import ProductCard from "@/src/components/ProductCard";
import { ProductType } from "@/src/types/product";

const ProductListWithFilter = ({
  allProductsData,
}: {
  allProductsData: ProductType[];
}) => {
  const { activeFilter, data, isLoading, handleFilterClick } =
    useProductsListWithFilter(allProductsData);

  return (
    <div>
      {/** Filters */}
      <div className="flex justify-between items-center my-[30px]">
        <div className="flex">
          {allFilters.map((filter) => (
            <span
              key={filter.slug}
              className={`mr-4 transition-all  cursor-pointer ${
                activeFilter === filter.slug
                  ? "text-primary"
                  : "hover:text-primary-50"
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.label}
            </span>
          ))}
        </div>
        <div>
          <Button color="black">All Products</Button>
        </div>
      </div>
      {/**Products */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
          isLoading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {Array.isArray(data) &&
          data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductListWithFilter;
