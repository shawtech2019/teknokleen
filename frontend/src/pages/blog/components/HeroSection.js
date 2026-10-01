import React from 'react'
import Images from '../../../constants/Images'

const HeroSection = () => {
  return (
   <section>
    <section>
    <div className="h-[100px] lg:block md:none none w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute lg:left-[40%] md:left-[60%] md:top-[10%]"/>
    <div className="h-[25px] w-[25px md:bg-[#00CCB1] bg-none rounded-md md:absolute md:top-[40%] md:right-[5%] absolute top-[50%] right-[20%] z-50" />
        <div className="h-[25px] w-[25px] md:bg-[#6EC1E4] bg-none rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:absolute lg:top-[48%] md:top-[80%] right-[33rem] z-50 "/>
        <div className="h-[25px] w-[25px] md:bg-[#FAECC9] bg-none rounded-md md:absolute lg:top-[99%] md:top-[90%] md:right-[5%] absolute top-[4%] left-[46%] z-50" />
    <section className="">
            <div className="absolute inset-0 bg-black bg-opacity-[0.5] h-[632px] to-transparent" />
            <img src={Images.BlogHeroSectionBG} alt="team" className="w-[1440px] h-[632px] object-cover" />
            <h1 className="relative bottom-[28rem] text-start text-white font-gentium-book-basic lg:text-[78px] md:text-[36px] text-[24px] lg:leading-[99px] lg:w-[857px] md:w-[400px] w-[210px] left-[4rem] flex item-start justify-start">Unveiling the Latest Innovations and Trends</h1>
          </section>
    </section>
   </section>
  )
}

export default HeroSection