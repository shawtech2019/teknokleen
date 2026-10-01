import React from 'react'
import AboutHeroSection from './components/AboutHeroSection'
import OurClientSection from '../home/components/OurClientSection'
import Our_story_Section from './components/Our_story_Section'
import Vision_page from './components/Vision_page'
import Mission_page from './components/Mission_page'
import ExemplifyValue_page from './components/ExemplifyValue_page'
import AboutCleaningSection from '../home/components/AboutCleaningSection'
import Footer_about from './components/Footer_about'

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      <OurClientSection />
      <Our_story_Section />
      <Vision_page />
      <Mission_page />
      <ExemplifyValue_page />
      <AboutCleaningSection />
      <Footer_about />
    </div>
  )
}

export default About