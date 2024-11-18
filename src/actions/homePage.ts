"use server";

import { ProductType } from "../types/product";
import { nextFetch } from "../utils/functions/nextFetch";

export const getAllProducts = async (skip: number = 0, limit: number = 8) => {
  const allProducts = await nextFetch<{ products: ProductType[] }>(
    `/products?skip=${skip}&limit=${limit}`
  );
  return allProducts?.products ?? [];
};

// const getTopFiveCategories = async () => {
//   const topCategories = await nextFetch("/products/categories");
//   const topFiveCategoriesSlug = ["womens-dresses","womens-watches","beauty","tops", ]
//     const topFiveCategoriesWithProduct = Promise.all
// };
