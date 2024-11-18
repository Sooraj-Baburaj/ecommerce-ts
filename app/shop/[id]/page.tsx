import React, { Suspense } from "react";

import ProductDetail from "@/src/components/Product";

interface ProductDetailPagePropTypes {
  params: Promise<{ id: string }>;
}

async function ProductDetailPage({ params }: ProductDetailPagePropTypes) {
  const { id } = await params;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductDetail id={id} />
    </Suspense>
  );
}

export default ProductDetailPage;
