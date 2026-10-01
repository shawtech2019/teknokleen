import React from "react";
import Images from "../../../constants/Images";

const AllPostSection = () => {
  return (
    <section className="mt-[4rem]">
      <section>
        <div className="text-[#23146D] font-sans font-semibold text-2xl leading-8 lg:mx-[6rem] mx-[2rem]">
          <h1>All blog posts</h1>
        </div> 
        <section className="mt-[2rem]">
          <section className="lg:flex flex-col sm:flex-row  items-center justify-center gap-10 lg:mx-[6rem] mx-[2rem]">
            <section className="items-center justify-center">
              <img src={Images.All_post_img1} alt="All post one" />
              <section className="mt-[4rem]">
                <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
                  14 Jun 2023
                </p>
                <div className="flex gap-10 my-2">
                  <h1 className="text-[24px] w-[300px] text-2xl font-semibold leading-7 font-['Poppins']">
                    World class professional cleaning
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#00A5E2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#4F4F4F] lg:w-[400px] text-base font-normal leading-6 font-['Poppins']">
                  The cleaning business is creating a growing industry all over
                  the world with yearly earnings running into hundreds of
                  millions....
                </p>
                <div className="flex gap-2">
                  <p className="text-[14px] text-[#00A5E2] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#EEF4FF]">
                    Cleaning
                  </p>
                </div>
              </section>
              
            </section>

            <section>
              <img src={Images.All_post_img2} alt="All post one" />
              <section className="mt-[4rem]">
                <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
                  14 Jun 2023
                </p>
                <div className="flex gap-10 my-2">
                  <h1 className="text-[24px] w-[300px] text-2xl font-semibold leading-7 font-['Poppins']">
                    World class professional cleaning
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#00A5E2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#4F4F4F] lg:w-[400px] text-base font-normal leading-6 font-['Poppins']">
                  The cleaning business is creating a growing industry all over
                  the world with yearly earnings running into hundreds of
                  millions....
                </p>
                <div className="flex gap-2">
                  <p className="text-[14px] text-[#00A5E2] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#EEF4FF]">
                    Cleaning products
                  </p>
                  <p className="text-[14px] text-[#23146D] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#F9F5FF]">
                Professional
              </p>
                </div>
              </section>
              
            </section>

            <section>
              <img src={Images.All_post_img3} alt="All post one" />
              <section className="mt-[4rem]">
                <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
                  14 Jun 2023
                </p>
                <div className="flex gap-10 my-2">
                  <h1 className="text-[24px] w-[300px] text-2xl font-semibold leading-7 font-['Poppins']">
                    World class professional cleaning
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#00A5E2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#4F4F4F] lg:w-[400px] text-base font-normal leading-6 font-['Poppins']">
                  The cleaning business is creating a growing industry all over
                  the world with yearly earnings running into hundreds of
                  millions....
                </p>
                <div className="flex gap-2">
                  <p className="text-[14px] text-[#00A5E2] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#EEF4FF]">
                    Cleaning products
                  </p>
                </div>
              </section>
              
            </section>
          </section>
          <section className="flex items-center justify-center py-[4rem]">
          <button className="bg-[#fff] hover:bg-[#FAECC9] hover:tracking-[1px] md:w-[203px] md:h-[54px] w-[150px] h-[40px] rounded-[10px] text-[#23146D] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-[#23146D] border-[2px] tracking-wide">
            Learn More
          </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AllPostSection;
