import React from "react";
import OurClientSection from "../home/components/OurClientSection";
import AboutCleaningSection from "../home/components/AboutCleaningSection";
import ElevateSchool from "./components/elevateSection";
import { mask } from "../../constants/school_images";
import SchoolHero from "./components/hero"
import Footer_about from "../about/components/Footer_about";
import ImagesContainer from "./components/Image_slider_section/ImagesContainer";

const School = () => {
  return (
    <>
    <SchoolHero />
      <OurClientSection />
      <ElevateSchool />
      {/* <img src={mask} className="w-full" /> */}
      <ImagesContainer />
      <AboutCleaningSection />
      <Footer_about />
    </>
  );
};

export default School;