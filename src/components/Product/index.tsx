import React from "react";

import { nextFetch } from "@/src/utils/functions/nextFetch";
import Breadcrumbs from "../utils/Breadcrumbs";
import { ProductType } from "@/src/types/product";
import ProductOverview from "./ProductOverview";

interface ProductDetailPropTypes {
  id: string;
}

const ProductDetail = async ({ id }: ProductDetailPropTypes) => {
  const productData = await nextFetch<ProductType>(`/products/${id}`);

  if (productData.error) {
    return <p>Failed to fetch product details</p>;
  }
  return (
    <div>
      <div className="px-[100px] py-7 bg-primary-10">
        <Breadcrumbs
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { label: productData.title },
          ]}
        />
      </div>
      <ProductOverview data={productData} />
    </div>
  );
};

export default ProductDetail;
