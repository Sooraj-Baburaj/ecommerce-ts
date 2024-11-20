import React from "react";

import { ProductType } from "@/src/types/product";
import ProductImages from "./ProductImages";
import ProductDesciption from "./ProductDescription";

interface ProductOverviewPropTypes {
  data: ProductType;
}

const ProductOverview = ({ data }: ProductOverviewPropTypes) => {
  return (
    <section className="py-9 px-24 flex space-x-16">
      <div className="flex-1 min-w-0">
        <ProductImages images={data.images} />
      </div>
      <div className="flex-1 min-w-0">
        <ProductDesciption data={data} />
      </div>
    </section>
  );
};

export default ProductOverview;
