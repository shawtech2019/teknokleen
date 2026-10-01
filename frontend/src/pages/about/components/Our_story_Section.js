import React from "react";
import Images from "../../../constants/Images";

const Our_story_Section = () => {
  return (
    <section className="lg:h-[100vh]">
      <section className="px-[2rem] lg:mt-[8rem] mt-[4rem]"> 
      <h1 className="flex items-center justify-start text-[#23146D] font-bold lg:text-6xl text-[18px] mb-[-1rem] leading-64">Our story</h1>
        <section className="lg:flex flex flex-col sm:flex-row  items-center justify-center lg:gap-60">
          <section className="lg:w-[589px] lg:h-[483px] md:w-[400px] font-Poppins text-base font-medium leading-[185%] flex items-center justify-center " >
          
            <p className="text-[#0D1111] flex items-center justify-center text-justify lg:text-[16px] md:text-[14px] lg:mt-0 mt-[2rem]  text-[10px] font-medium leading-[1.85]">
              Born in recognition of innovative nature and industry niche of
              Host, The Dry Extraction Carpet Cleaning System, Teknokleen Ltd
              was incorporated in August 1990 to sell and distribute this
              System. Building on the knack to recognise, establish and utilize
              market niches, the company rapidly expanded its operations to
              cover cleaning and facility maintenance services, sales and
              distribution of cleaning equipment and products, training and
              consultancy as well as hospitality support services.
            <br />
            <br/>
              Our hunger for innovations in the industry coupled with our
              membership and affiliation with local and international bodies
              such as Cleaning Practitioners of Nigeria (CPAN), International
              Sanitary and Supplies Association (ISSA), The British Institute Of
              Cleaning Science (BICS) and International Facility Management
              Association(IFMA) have greatly contributed to making The
              Teknokleen Group a recognised industry leader and trail blazer.
            </p>
          </section>
          <section className="flex items-center justify-center ">
          <div className="relative">
          <div class="w-[100px] h-[100px] absolute rounded-br-[10px] rounded-tl-[30px] lg:top-[8.5rem] top-[5rem] lg:left-[-4.1rem] md:left-[2rem] left-[-2rem] bg-[#FCDDEC]" />
          <div class="w-[100px] h-[100px] absolute  rounded-br-[30px] rounded-tl-[10px] bottom-[-2rem] lg:right-[-2rem] md:right-[-4rem] right-[1rem] -z-20 bg-[#FCDDEC]" />
          <div className="flex items-center justify-center ">
          <div className="absolute lg:top-[11.5rem] top-[7rem] lg:w-[502px] lg:h-[365px] md:w-[400px] lg:left-0 md:left-[4.4rem] md:h-[365px] w-[250px] h-[150px] rounded-[10px] bg-blue-200 -z-50" />
          </div>
            <img src={Images.Digital_service} alt="digital service" className="lg:w-[100%] lg:h-[100%]" />
          </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Our_story_Section;
