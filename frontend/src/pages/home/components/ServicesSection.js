import React from "react";
import Images from "../../../constants/Images";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section
     className=" lg:h-[100vh] md:h-[50vh] h-[100vh] lg:py-20 md:py-20 py-[4rem]">
      <h1 className="text-center py-6 pb-12 font-bold tracking-[1px] lg:text-[64px] md:text-[60px] text-[32px] text-[#23146D] font-gentium-book-basic ">
        Our Services{" "}
      </h1>
      <section className="flex items-center justify-center relative">
      <div class="absolute w-[5rem] h-[5rem] border-t-[0.5rem] border-l-[0.5rem] border-[#FCDDEC] rounded-tl-[20px] top-0 left-[3.5rem] transform rotate-[45%]"/>
  <div class="absolute w-[5rem] h-[5rem] border-t-[0.5rem] border-l-[0.5rem] border-[#FCDDEC] rounded-tl-[20px] bottom-0 right-[3.5rem] transform rotate-[180deg]"/>
        <section className="lg:flex lg:items-center lg:justify-center md:flex items-center justify-center md:mx-4 gap-6 lg:space-y-0 space-y-8">
          {/* this section contains information about cleaning services start here */}
          <section className="flex items-center justify-center">
            <section className="lg:w-[425px] lg:h-[436px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] lg:py-10 md:py-4 lg:px-4 py-12 rounded-[20px] bg-[#fff] shadow-2xl justify-center items-center text-center  ">
              <div className="flex justify-center relative">
              <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[-0.8rem] left-[7rem] rounded-tr-[10px]  lg:flex items-center justify-center rounded-br-[5px] rounded-bl-[18px] bg-[#86CFF2]" />
                <img
                  src={Images.cleaning_service}
                  alt="cleaning service not showing"
                  className="md:w-[50px] md:h-[50px] lg:w-[100px] z-20 lg:h-[100px] w-[40px] h-[40px]"
                />
               <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[4.5rem] left-[-7rem] rounded-tr-[18px]  flex items-center justify-center rounded-br-[5px] rounded-bl-[10px] bg-[#86CFF2]" />
              </div>
              <h2 className='p-4 text-[#23146D] font-["Poppins"] md:text-[12px] lg:text-[20px] text-[12px] not-italic leading-normal font-semibold '>
                TEKNOKLEEN LIMITED
              </h2>
              <p className="text-[#222223] text-[10px] md:text-[10px] lg:text-[16px] lg:leading-[26px] leading-0 font-normal px-4 lg:px-0 ">
                We offer comprehensive cleaning solutions for Industrial,
                Commercial, and Domestic sectors. Our services seamlessly blend
                proactive and customized cleaning schedules with cutting-edge
                technologies.
              </p>
              <div className="flex items-center justify-center">
                <Link to="/hygiene">
                <button className="lg:pt-8 md:pt-4  pt-4 flex items-center justify-center text-[10px] lg:text-[18px] md:text-[12px] font-semibold text-[#86CFF2] ">
                  Visit website
                  <BsArrowRight className="ml-2" />
                </button>
                </Link>
              </div>
            </section>
          </section>
          {/* the information about cleaning services ends here */}

          {/* this section contains information about the hygiene market start here */}
          <section className="flex items-center justify-center">
            <section className="lg:w-[425px] lg:h-[436px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] lg:py-10 md:py-4 px-4 rounded-[20px] py-12 bg-[#fff] shadow-2xl justify-center items-center text-center  ">
              <div className="flex items-center justify-center">
              <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[-2.5rem] left-[7rem] rounded-tr-[10px] lg:flex items-center justify-center rounded-br-[5px] rounded-bl-[18px] bg-[#86CFF2]" />
                <img
                  src={Images.hygiene_market}
                  alt="cleaning service not showing"
                  className="lg:w-[100px] lg:h-[100px] z-20 md:w-[50px] md:h-[50px] w-[40px] h-[40px] "
                />
                <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[2.5rem] left-[-7rem] rounded-tr-[18px]  flex items-center justify-center rounded-br-[5px] rounded-bl-[10px] bg-[#86CFF2]" />
              </div>
              <h2 className='p-4 text-[#23146D] font-["Poppins"] lg:text-[20px] md:text-[12px] text-[12] not-italic leading-normal font-semibold '>
                THE HYGIENE SUPERMARKET
              </h2>
              <p className="text-[#222223] lg:text-[16px] md:text-[10px] text-[10px] lg:leading-[26px] md:leading-0 font-normal ">
                We proudly serve as manufacturers' representatives, offering a
                wide range of premium,long-lasting cleaning equipment, products,
                and accessories.
              </p>
              <div className="flex items-center justify-center">
               <Link to='/hygiene-shop'>
               <button className="lg:pt-8 md:pt-4 p-4 flex items-center justify-center lg:text-[18px] md:text-[12px] text-[10px] font-semibold text-[#86CFF2] ">
                  Visit website
                  <BsArrowRight className="ml-2" />
                </button></Link>
              </div>
            </section>
          </section>
          {/* the information about the hygiene market ends here */}

          {/* this section contains information about the hygiene market start here */}
          <section className="flex items-center justify-center">
            <section className="lg:w-[425px] lg:h-[436px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] lg:py-10 md:py-4 px-4 rounded-[20px] py-12 bg-[#fff] shadow-2xl justify-center items-center text-center  ">
              <div className="flex items-center justify-center">
              <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[-2.5rem] left-[7rem] rounded-tr-[10px]  flex items-center justify-center rounded-br-[5px] rounded-bl-[18px] bg-[#86CFF2]" />
                <img
                  src={Images.hygiene_school}
                  alt="cleaning service not showing"
                  className="lg:w-[100px] lg:h-[100px] z-20 md:w-[50px] md:h-[50px] w-[40px] h-[40px] "
                />
                <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[2.5rem] md:none left-[-7rem] rounded-tr-[18px]  lg:flex items-center justify-center rounded-br-[5px] rounded-bl-[10px] bg-[#86CFF2]" />
              </div>
              <h2 className='p-4 text-[#23146D] font-["Poppins"] lg:text-[20px] md:text-[11px] text-[12] not-italic leading-normal font-semibold '>
                TEKNOKLEEN SCHOOL OF HYGIENE
              </h2>
              <p className="text-[#222223] lg:text-[16px] md:text-[10px] text-[10px] lg:leading-[26px] md:leading-0 font-normal ">
                British Institute of Cleaning Science’s accredited training
                centre for courses in cleaning and housekeeping.
              </p>
              <div className="flex items-center justify-center">
                <Link to="/school">
                <button className="lg:pt-8 md:pt-4 p-4 flex items-center justify-center lg:text-[18px] md:text-[12px] text-[10px] font-semibold text-[#86CFF2] ">
                  Visit website
                  <BsArrowRight className="ml-2" />
                </button>
                </Link>
              </div>
            </section>
          </section>
          {/* the information about the hygiene market ends here */}
        </section>
      </section>
    </section>
  );
};

export default ServicesSection;