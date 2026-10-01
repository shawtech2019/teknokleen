import React from 'react'
import HeroSectionContact from './components/HeroSectionContact'
import Form from './components/Form'
import BranchSection from './components/BranchSection'
import Footer_about from '../about/components/Footer_about'

const Contact = () => {
  return (
   <div>
   <HeroSectionContact />
   <Form />
   <BranchSection />
   <Footer_about />
   </div>
  )
}

export default Contact