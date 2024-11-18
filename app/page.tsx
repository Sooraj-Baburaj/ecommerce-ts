import Footer from "@/src/components/Footer";
import HomeAllProducts from "@/src/components/Home/HomeAllProducts";
import HomeBanner from "@/src/components/Home/HomeBanner";
import HomeBrands from "@/src/components/Home/HomeBrands";
import HomeTopProducts from "@/src/components/Home/HomeTopProducts";

export default async function Home() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <HomeBanner />
      <HomeBrands />
      <HomeTopProducts />
      <HomeAllProducts />
      <Footer />
    </div>
  );
}
