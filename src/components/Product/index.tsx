import React from "react";

import { ProductType } from "@/src/types/product";
import { nextFetch } from "@/src/utils/functions/nextFetch";

interface ProductDetailPropTypes {
  id: string;
}

const ProductDetail = async ({ id }: ProductDetailPropTypes) => {
  const productData = await nextFetch(`/products/${id}`);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
