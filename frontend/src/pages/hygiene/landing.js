import React from "react";
import HygieneHero from "./components/hero";
import { motion } from "framer-motion";
import OurClientSection from "../home/components/OurClientSection";
import UnleashSection from "./components/unleashSection";
import WhatWeDoSection from "./components/whatWeDoSection";
import Footer_about from '../about/components/Footer_about'
import AboutCleaningSection from '../home/components/AboutCleaningSection'
const HygieneLanding = () => {
  
  return (
    <>
    <HygieneHero />
    <OurClientSection />
    <UnleashSection />
    <WhatWeDoSection />
    <AboutCleaningSection />
    <Footer_about />
    </>
  );
};

export default HygieneLanding;
