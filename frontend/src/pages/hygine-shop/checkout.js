import React from "react";
import FooterSection from "../home/components/FooterSection";
import HygieneShopHero from "./components/shop_hero";
import FeaturedProduct from "./components/featured_products";
import CheckoutPage from "./components/checkout_page";
import HygieneShopChecktHero from "./components/checkout_hero";

const HygieneShopCheckout = () => {
  return (
    <>
      <HygieneShopChecktHero />
      <CheckoutPage />
      <FooterSection />
    </>
  );
};

export default HygieneShopCheckout;
