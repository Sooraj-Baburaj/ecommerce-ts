import { swrFetcher } from "@/src/api";
import { ProductType } from "@/src/types/product";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";

interface filterType {
  label: string;
  slug: string;
}

export const allFilters: filterType[] = [
  { label: "All Products", slug: "all-products" },
  { label: "Dresses", slug: "womens-dresses" },
  { label: "Jewellery", slug: "womens-jewellery" },
  { label: "Watches", slug: "womens-watches" },
];

const useProductsListWithFilter = (allProductsData: ProductType[]) => {
  const [activeFilter, setActiveFilter] = useState("all-products");

  const { data, isLoading, error } = useSWRImmutable(
    activeFilter === "all-products"
      ? null
      : `products/category/${activeFilter}?limit=8`,
    swrFetcher,
    { keepPreviousData: true }
  );

  const handleFilterClick = (filter: filterType) => {
    setActiveFilter(filter.slug);
  };

  const updatedData: ProductType[] =
    !data || error || activeFilter === "all-products"
      ? allProductsData
      : data?.data?.products;
  return {
    activeFilter,
    data: updatedData,
    isLoading,
    handleFilterClick,
  };
};

export default useProductsListWithFilter;
