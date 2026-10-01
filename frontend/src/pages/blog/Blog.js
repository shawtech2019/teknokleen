import React from 'react'
import HeroSection from './components/HeroSection'
import BlogPostScetion from './components/BlogPostScetion'
import AllPostSection from './components/AllPostSection'
import AboutCleaningSection from '../home/components/AboutCleaningSection'
import Footer_about from '../about/components/Footer_about'

export const Blog = () => {
  return (
    <div>
      <HeroSection />
      <BlogPostScetion />
      <AllPostSection />
      <AboutCleaningSection />
      <Footer_about />
    </div>
  )
}
