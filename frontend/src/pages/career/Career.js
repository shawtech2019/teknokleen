import React from 'react'
import CareerHeroSection from './components/HeroSection'
import OurClientSection from '../home/components/OurClientSection'
import CommitSection from './components/CommitSection'
import AboutCleaningSection from '../home/components/AboutCleaningSection'
import Footer_about from '../about/components/Footer_about'


const Career = () => {
  return (
    <div>
     <CareerHeroSection />
     <OurClientSection />
     <CommitSection />
     <AboutCleaningSection />
     <Footer_about />

    </div>
  )
}

export default Career