import { getAllProducts } from "@/src/actions/homePage";
import React from "react";
import ProductListWithFilter from "./ProductListWithFilter";

const HomeAllProducts = async () => {
  const allProducts = await getAllProducts();
  return (
    <div className="my-[45px] w-full max-w-[--home-max-width] mx-auto">
      <h2 className="text-[50px]">Latest Collection From Premium Brands</h2>
      <ProductListWithFilter allProductsData={allProducts} />
    </div>
  );
};

export default HomeAllProducts;
