import React from "react";
import Images from "../../../constants/Images";

const ChooseUsSection = () => {
  return (
    <>
      <section className="lg:mt-0 md: md:mt-0 mt-[30rem]">
        <h1 className="text-center font-gentium-book-basic font-extrabold text-[#23146D] lg:text-6xl text-[32px] leading-[106.3%]">
          Why choose us
        </h1>
        <p className="text-[#0D1111] py-4 text-center font-poppins font-semibold lg:text-[20px] text-[12px]">
          Discover the reasons why we stand out as your premier choice for
          cleaning services
        </p>
        <section className="lg:w-[1360px] lg:h-[578px] lg:bg-[#f2f6f9] lg:mx-[4rem] mt-[4rem] rounded-r-[400px] ">
          <section className="md:flex flex flex-col-reverse sm:flex-row items-center justify-center lg:gap-28 gap-10 lg:mx-0 mx-[2rem]">
            <section>
              <h4 className="lg:text-[29px] text-[12px] font-['Poppins'] font-medium  lg:w-[547px] lg:h-[227px]">
                With years of industry experience, our team possesses unmatched
                expertise in delivering top-notch cleaning solutions tailored to
                your unique needs.
              </h4>
            </section>
            <section className="relative flex items-center justify-center">
            <div className="lg:w-[238px] lg:h-[238px]  bg-[#6EC1E4] rounded-full absolute lg:top-[11rem] lg:left-[6.5rem]" /> 
           <img src={Images.Choose} className="relative w-[100%] :h-[100%]" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default ChooseUsSection;
