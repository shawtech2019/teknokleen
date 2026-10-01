import React from "react";
import Images from "../../../constants/Images";
import { Link } from "react-router-dom";

const AboutCleaningSection = () => {
  return (
    <>
      <section className="lg:w-[100%] lg:h-[497px] bg-[#FCFAF5] lg:mt-[4rem] flex items-center justify-center lg:py-0 py-[4rem]">
        <section className="flex items-center justify-center lg:mx-[8rem] mx-[4rem]">
          <section className="lg:flex flex flex-col-reverse sm:flex-row items-center justify-center lg:gap-20">
          <section className="lg:mt-0 mt-[2rem]">
              <h4 className="text-[#23146D] flex font-gentium-book-basic lg:text-[80px] text-[32px] font-bold leading-tight">
                Let’s talk about cleaning!
              </h4>
              <p className="lg:text-[18px] text-[12px] font-['Poppins'] lg:w-[385px] text-[#222223] leading-[32px] opacity-[0.4] mt-[1rem] font-medium text-start flex items-center justify-center sm:flex sm:items-center sm:justify-center ">
                Ready to experience the difference in cleanliness and
                professionalism?
              </p>
              <div className="">
                <Link to="/contact">
                <button className="bg-[#23146D] lg:mt-[2rem] mt-[1rem] hover:bg-[#00A5E2] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[40px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
                  Contact Us
                </button>
                </Link>
              </div>
          </section>
            <section className="flex items-center justify-center">
            <section className="lg:w-[475px] lg:h-[360px] w-[350px] h-[300px] bg-[#FFC640] rounded-[10px]">
              <img src={Images.LearnAbout}  />
            </section>
            </section>
            
          </section>
        </section>
      </section>
    </>
  );
};

export default AboutCleaningSection;
