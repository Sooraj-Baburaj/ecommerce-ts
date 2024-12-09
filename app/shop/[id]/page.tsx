import React from "react";

import ProductDetail from "@/src/components/Product";

interface ProductDetailPagePropTypes {
  params: Promise<{ id: string }>;
}

async function ProductDetailPage({ params }: ProductDetailPagePropTypes) {
  const { id } = await params;
  return <ProductDetail id={id} />;
}

export default ProductDetailPage;
