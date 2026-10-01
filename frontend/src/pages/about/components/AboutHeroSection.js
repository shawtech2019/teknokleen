import React, {useRef} from "react";
import Images from "../../../constants/Images";
import {motion, useScroll, useTransform} from "framer-motion"
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

const AboutHeroSection = () => {
   const targetRef = useRef(null)
   const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
   });
   const opacity =  useTransform(scrollYProgress, [0, 0.9], [2, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
   const position = useTransform(scrollYProgress, (pos) => {
      return pos === 1 ? "relative" : "fixed";
   });
  return (
    <motion.section className="lg:mx-[4rem]  mx-[2rem] lg:flex items-center"
    style={{opacity}}
    ref={targetRef}
    
    > 
      <section className="md:mt-40 mt-40">
        <p className="w-[155px] h-[19px] text-center bg-[#E2F3FD] rounded-[5px] 
        text-[#23146D] text-[12px] mb-10 font-gochi-hand font-normal ">Innovation and excellence</p>
       <section className="">
       <section className="px-[1rem] lg:p-0  md:-p-0"> 
        <motion.h1
        className="text-[#23146D] lg:text-[78px] md:text-[60px] text-[24px] font-normal font-gentium-book-basic not-italic lg:leading-[99px] md:leading-[80px] leading-[40px]"
        initial={{x: -1000}}
        animate={{x: -20}}
        transition={{
          duration: 3,
          delay: 0.5
        }}
        whileHover={{
          scale: 0.9, opacity: 0.9
        }}
        >Discover the<br /> 
        <div className="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute lg:left-[60%] md:left-[60%]"/>
        <div className="lg:h-[20px] lg:w-[300px] h-[6px] w-[90px] bg-[#FFC640] absolute md:left-[4%] left-[10px] lg:top-[78%] top-[76%]  -z-30"/>
        <b>
          Teknokleen difference</b></motion.h1>
        <motion.p 
        initial={{x: -999}}
        animate={{x: -10}}
        transition={{ 
          duration: 4,
          delay: 1
         }}
        
        className="md:w-[513px] italic md:text-[16px] text-[10px] font-['Poppins'] lg:leading-[30px] md:leading-[30px] leading-[16px] text-[#4F4F4F] ">
         Experience the seamless blend of innovation, excellence, and personalized service that sets us apart.</motion.p>
       </section>
       </section>
       <section className="md:flex py-12 gap-5 flex"> 
       <Link >
          <button className="bg-[#23146D] hover:bg-[#00A5E2] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[40px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
          <PopupButton
        url="https://calendly.com/webmaster-5z8"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book Now"
      />
          </button>
      
          </Link>
        <div className="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute md:left-[12%] bottom-[2%]" />
       </section>
      </section>
      <section>
        <div className="h-[25px] w-[25px] md:bg-[#00CCB1] bg-none rounded-md md:absolute md:top-[40%] md:right-[5%] absolute top-[50%] right-[20%] z-50" />
        <div className="h-[25px] w-[25px] md:bg-[#6EC1E4] bg-none rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:absolute lg:top-[30%] md:top-[80%] right-[32rem] z-50 "/>
        <div className="h-[25px] w-[25px] md:bg-[#FAECC9] bg-none rounded-md md:absolute md:top-[90%] md:right-[5%] absolute top-[4%] left-[46%] z-50" />
        <section className="md:relative absolute right-10 md:right-[-8rem] lg:right-[-9rem]">
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="md:absolute relative lg:left-[-4rem] lg:top-[2rem] top-[-8rem]  left-0 md:p-[] md:left-0 md:right-5  md:w-[554px] md:h-[746px]  w-[300px] h-[300px] ">
          <img src={Images.About_usBG}  alt="picture"/>
          </motion.div>
          <div className="lg:block md:block hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[554px] md:h-[650px] w-[200px] h-[200px]" viewBox="0 0 554 746" fill="none">
         <path d="M267.18 718.451C-191.464 576.118 42.7271 181.213 217.153 1.55255L436.77 -63.3346L779.453 -112L868 177.376C858.828 417.04 725.824 860.784 267.18 718.451Z" fill="#E2F3FD" fill-opacity="0.6"/>
       </svg>
       </div>
        </section>
      </section>
    </motion.section>
  );
};

export default AboutHeroSection;