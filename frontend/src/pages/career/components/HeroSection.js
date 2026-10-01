import React, { useRef, useState } from "react";
import Images from "../../../constants/Images";
import { motion, useScroll, useTransform } from "framer-motion";
import ApplicationForm from "../../../components/ApplicationForm";


const CareerHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  return (
    <motion.section
      className="lg:mx-[4rem] mx-[2rem] lg:flex items-center"
      style={{ opacity}}
      ref={targetRef}
    >
      <section className="md:mt-40 mt-40">
        <p
          className="w-[155px] h-[19px] text-center bg-[#E2F3FD] rounded-[5px] 
        text-[#23146D] text-[12px] mb-10 font-gochi-hand font-normal "
        >
          trusted cleaning services
        </p>
        <section className="">
          <section className="px-[1rem] lg:p-0  md:-p-0">
            <motion.h1
              className="text-[#23146D] lg:text-[78px] md:text-[60px] text-[24px] font-normal font-gentium-book-basic not-italic lg:leading-[99px] md:leading-[80px] leading-[40px]"
              initial={{ x: -1000 }}
              animate={{ x: -20 }}
              transition={{
                duration: 3,
                delay: 0.5,
              }}
              whileHover={{
                scale: 0.9,
                opacity: 0.9,
              }}
            >
              Join Our Team at
              <br />
              <div className="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute lg:left-[40%] md:left-[60%]" />
              <div className="lg:h-[20px] lg:w-[300px] h-[6px] w-[90px] bg-[#FFC640] absolute md:left-[4%] left-[10px] lg:top-[78%] top-[76%]  -z-30" />
              <b>Teknokleen for Growth and Success</b>
            </motion.h1>
            <motion.p
              initial={{ x: -999 }}
              animate={{ x: -10 }}
              transition={{
                duration: 4,
                delay: 1,
              }}
              className=" lg:w-[558px] md:w-[513px] italic md:text-[16px] text-[10px] font-['Poppins'] lg:leading-[30px] md:leading-[30px] leading-[16px] text-[#4F4F4F] "
            >
              At Teknokleen, we promote an atmosphere of openness, respect and
              trust, and bring a sense of teamwork and diversity to all we do.
            </motion.p>
          </section>
        </section>
        <section className="md:flex py-12 gap-5 flex">
          <button onClick={openModal} className="bg-[#23146D] hover:bg-[#00A5E2] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[40px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
            Apply Now
          </button>
          <ApplicationForm isOpen={isModalOpen} onClose={closeModal} />
          <div className="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute md:left-[12%] bottom-[2%]" />
        </section>
      </section>
      <section>
        <div className="h-[25px] w-[25px] md:bg-[#00CCB1] bg-none rounded-md md:absolute md:top-[40%] md:right-[5%] absolute top-[50%] right-[20%] z-50" />
        <div className="h-[25px] w-[25px] md:bg-[#6EC1E4] bg-none rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:absolute lg:top-[48%] md:top-[80%] right-[33rem] z-50 " />
        <div className="h-[25px] w-[25px] md:bg-[#FAECC9] bg-none rounded-md md:absolute md:top-[90%] md:right-[5%] absolute top-[4%] lg:left-[40rem] left-[96%] z-50" />
        <section className="md:relative right-10 md:right-[-8rem] lg:right-[-9rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className="md:absolute relative lg:left-[-9rem] left-0 md:p-[] md:left-0 lg:top-10 top-[-4rem] md:right-5 lg:w-[667px] lg:h-[567px] md:w-[554px] md:h-[746px]  w-[300px] h-[300px] "
          >
            <img
              src={Images.Career_hero}
              alt="picture"
              className="lg:w-[1159px] lg:h-[838px] "
            />
          </motion.div>
          <div className=" lg:block md:block hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className=" lg:w-[554px]  lg:h-[746px] md:w-[554px] md:h-[650px] w-[500px] h-[400px]" viewBox="0 0 554 746" fill="none">
         <path d="M267.18 718.451C-191.464 576.118 42.7271 181.213 217.153 1.55255L436.77 -63.3346L779.453 -112L868 177.376C858.828 417.04 725.824 860.784 267.18 718.451Z" fill="#FCDDEC" fill-opacity="0.6"/>
       </svg>
          </div>
        </section>
      </section>
    </motion.section>
  );
};

export default CareerHeroSection;