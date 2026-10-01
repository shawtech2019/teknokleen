import React from "react";
import Images from "../../../constants/Images";

const Mission_page = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-[4rem]">
        <section className="lg:flex flex flex-col sm:flex-row  items-center justify-center lg:gap-20 md:space-x-10">
          <div className="relative">
            <div class="lg:w-[100px] lg:h-[100px] md:w-[30px] md:h-[30px] absolute rounded-bl-[10px] rounded-tr-[30px] lg:top-[5.5rem] md:top-[1.2rem] md:right-[1.2rem] top-[5rem] lg:right-[5.5rem] bg-[#FFC640] -z-50 " />
            <img
              src={Images.Mission}
              alt="Missing mission"
              className="lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[100%]"
            />
          </div>

          <section className="relative">
            <div className="h-[100px] w-[100px] bg-[#F9CD62] rounded-[50%] opacity-[0.9] absolute blur-[67px] lg:top-[-8rem] lg:right-[8rem]" />
            <div className="h-[25px] w-[25px] md:bg-[#00CCB1] bg-none rounded-md md:absolute lg:top-[-8rem] md:right-[20%] absolute right-[20%] z-50" />
            <div className="h-[25px] w-[25px] md:bg-[#6EC1E4] bg-none rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:absolute lg:top-[-2rem] lg:left-[4rem] md:top-[10rem] right-[33rem] z-50 " />
           <section className="flex items-center justify-center">
          <section className="">
          <h1 className="lg:w-[555px] text-[#23146D)] text-center font-gentium-book-basic lg:text-start md:text-start font-bold text-[#23146D] lg:text-[64px] text-[24px] leading-[64px]">
              Our mission
            </h1>
            <p className="lg:w-[500px] md:w-[300px] mx-[2rem] lg:text-start md:text-start text-center sm:mx-[2rem] text-[#0D1111] font-['Poppins'] lg:text-[18px] md:text-[12px] leading-[24px] font-medium lg:mt-[2rem]">
              To be the cleaning company of first choice, driving customer
              satisfaction through innovation in products and services in the
              hygiene industry to the benefit of all stakeholders.
            </p>
          </section>
           </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Mission_page;
