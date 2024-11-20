import { useState } from "react";

const useProductImages = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return { activeImageIndex, setActiveImageIndex };
};

export default useProductImages;
