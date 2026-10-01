import React, {useRef} from 'react'
import {  motion, useScroll, useTransform } from "framer-motion";
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import OurClientSection from './components/OurClientSection'
import ChooseUsSection from './components/ChooseUsSection'
import AboutCleaningSection from './components/AboutCleaningSection'
import FooterSection from './components/FooterSection'

const Home = () => {
  return (
    <div>
    <HeroSection />
    <OurClientSection />
    <ServicesSection />
    <ChooseUsSection />
    <AboutCleaningSection />
    <FooterSection />
    </div>
  )
}

export default Home