import React, { useRef } from "react";
import Images from "../../../constants/Images";
import "./OurClientSection.css";
import { motion, useScroll, useTransform } from "framer-motion";

const OurClientSection = () => {
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
  const slideVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };
  return (
    <motion.div 
    style={{opacity}}
    ref={targetRef}>
      <div className="flex items-center justify-center border-2 border-[#85CFF280] lg:w-full lg:h-[212px] md:w-[100%] md:h-[212px] h-[150px] lg:rounded-l-[400px] md:rounded-l-[400px] rounded-l-[200px] border-bl-4 lg:mt-6 md:mt-6 mt-[4rem]  lg:ml-[8rem]">
        <div className="mb-2 lg:ml-40 md:ml-20 ml-10">
          <h3 className='lg:text-[29px] md:text-[20px] text-[16px] font-["Poppins"] not_italic font-semibold lg:w-[300px] w-[150px] md: '>
            Over <span className="text-[#00A5E2]">50,000+</span>plus happy clients
          </h3>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="slider lg:mt-0 md:mt-0 mt-40"
        >
          <div className="slide-track flex items-center gap-5">
            <div className="slide">
              <img src={Images.Seplat} alt="seplat" />
            </div>
            <div className="slide">
              <img src={Images.Dhl} alt="seplat" className="slide_img" />
            </div>
            <div className="slide">
              <img src={Images.Jobberman} alt="seplat" />
            </div>
            <div className="slide">
              <img src={Images.Watersmith} alt="seplat" />
            </div>
            <div className="slide">
              <img src={Images.Promasidor} alt="seplat" />
            </div>
            <div className="slide">
              <img src={Images.Rainiance} alt="seplat" />
            </div>
            <div className="slide">
              <img src={Images.Access_bank} alt="access bank" />
            </div>
            <div className="slide">
              <img src={Images.First_bank} alt="first bank" />
            </div>
            <div className="slide">
              <img src={Images.Eco_bank} alt="eco bank" />
            </div>
            <div className="slide">
              <img src={Images.Fidelity_bank} alt="fidelity bank" />
            </div>
            <div className="slide">
              <img src={Images.Greenwich} alt="greenwich" />
            </div>
            <div className="slide">
              <img src={Images.Arbico} alt="arbico" />
            </div>
            <div className="slide">
              <img src={Images.Dufil} alt="dufil" />
            </div>
            <div className="slide">
              <img src={Images.Konga} alt="konga" />
            </div>
            <div className="slide">
              <img src={Images.Transcorp} alt="transcorp" />
            </div>
            <div className="slide">
              <img src={Images.Leasing_plc} alt="leasing plc" />
            </div>
            <div className="slide">
              <img src={Images.Lotus_capital} alt="lotus_capital" />
            </div>
            <div className="slide">
              <img src={Images.Michelin} alt="michelin" />
            </div>
            <div className="slide">
              <img src={Images.Swift} alt="swift" />
            </div>
            <div className="slide">
              <img src={Images.Bet_king} alt="Betking_king" />
            </div>
            <div className="slide">
              <img src={Images.Tvc} alt="tvc-news" />
            </div>
            <div className="slide">
              <img src={Images.Cardinal_stone} alt="Cardinalstone" />
            </div>
          
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurClientSection;
