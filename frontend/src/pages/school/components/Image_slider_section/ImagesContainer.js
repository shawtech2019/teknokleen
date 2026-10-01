import React from 'react'
import images1 from "../../../../assets/School-of-Hygiene-Slide-2.jpeg";
import images2 from "../../../../assets/School-of-Hygiene-Website-slide.jpeg";
import images3 from "../../../../assets/School-of-Hygiene-Slide-3.jpeg";
import ImageSlider from './ImageSlider';


const ImagesContainer = () => {
   
  const images = [
    images1,
    images2,
    images3,
  ]

  return (
    <div className="container mx-auto">
      <ImageSlider images={images} />
    </div>


  )
}

export default ImagesContainer