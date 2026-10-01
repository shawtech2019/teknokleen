import React from "react";
import FooterSection from "../home/components/FooterSection";
import SlideProducts from "./components/slide_products";
import HygieneShopHero from "./components/hero";
import FeaturedProduct from "./components/featured_products";
import AboutCleaningSection from "../home/components/AboutCleaningSection";

const HygieneShop = () => {
  return (
    <>
      <HygieneShopHero />
      {/* product slider */}
      <SlideProducts />
      {/* featured products */}
      <FeaturedProduct />
      <AboutCleaningSection />
      <FooterSection />
    </>
  );
};

export default HygieneShop;
