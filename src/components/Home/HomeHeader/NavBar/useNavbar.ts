const useNavbar = () => {
  const navItems = [
    { label: "Jewelry & Accessories", href: "/jewelry-accessories" },
    { label: "Clothing & Shoes", href: "/clothing-shoes" },
    { label: "Home & Living", href: "/home-living" },
    { label: "Wedding & Party", href: "/wedding-party" },
    { label: "Toys & Entertainment", href: "/toys-entertainment" },
    { label: "Art & Collectibles", href: "/art-collectibles" },
    { label: "Craft Supplies & Tools", href: "/craft-supplies-tools" },
  ];
  return { navItems };
};

export default useNavbar;
