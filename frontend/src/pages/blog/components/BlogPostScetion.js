import React from "react";
import Images from "../../../constants/Images";

const BlogPostScetion = () => {
  return (
    <section>
      <section className="lg:mx-[6rem] mx-[2rem]">
        <h2 className='font-["Poppins"] text-[24px] font-semibold text-[#23146D] '>
          Recent blog posts
        </h2>
      </section>
      <section className="lg:flex flex-col sm:flex-row  items-center justify-center gap-10 lg:mx-[6rem] mx-[2rem]">
        <section className="mt-[2rem]">
          <section>
            <img src={Images.BlogPost_img} />
          </section>
          <section className="mt-[4rem]">
            <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
              20 Jun 2023
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
            <p className="text-[#4F4F4F] lg:w-[500px] text-base font-normal leading-6 font-['Poppins']">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex gap-2">
              <p className="text-[14px] text-[#23146D] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#F9F5FF]">
                Hygiene
              </p>
              <p className="text-[14px] text-[#00A5E2] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#EEF4FF]">
                Cleaning
              </p>
              <p className="text-[14px] text-[#FFC640] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-yellow-400 bg-opacity-10">
                Information
              </p>
            </div>
          </section>
        </section>
        <section>
          <div className="lg:flex flex flex-col sm:flex-row  items-center justify-center gap-10">
            <img src={Images.Class_clean_img} alt="cleaning word class image" />
            <section className="mt-[4rem]">
              <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
                19 Jun 2023
              </p>
              <h1 className="text-[24px] text-2xl font-semibold leading-7 font-['Poppins']">
                World class professional cleaning
              </h1>
              <p className="text-[#4F4F4F] text-base font-normal leading-6 font-['Poppins']">
                When it comes to our cleaning services, we leave no surface
                unclean! Book one-off cleaning, periodic cleaning, pest control,
                fumigation and contract....
              </p>
              <div className="flex gap-2">
                <p className="text-[14px] text-[#23146D] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#F9F5FF]">
                  Hygiene
                </p>
                <p className="text-[14px] text-[#FFC640] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#FDF2FA]">
                  Cleaning
                </p>
              </div>
            </section>
          </div>
          <div className="lg:flex flex flex-col sm:flex-row  items-center justify-center gap-10">
            <img src={Images.Choose_clean_img} alt="cleaning word class image" />
            <section className="mt-[4rem]">
              <p className=" text-[#23146D] font-sans font-semibold text-[14px] leading-[20px]">
                18 Jun 2023
              </p>
              <h1 className="text-[24px] text-2xl font-semibold leading-7 font-['Poppins']">
                How to choose cleaning service from home
              </h1>
              <p className="text-[#4F4F4F] text-base font-normal leading-6 font-['Poppins']">
                The cleaning business is creating a growing industry all over
                the world with yearly earnings running into hundreds of
                millions....
              </p>
              <div className="flex gap-2">
                <p className="text-[14px] text-[#23146D] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-[#F9F5FF]">
                  Hygiene
                </p>
                <p className="text-[14px] text-[#00A5E2] font-sans text-center tracking-wider border-1 rounded-xl py-[2px] px-[10px] bg-blue-300 bg-opacity-10">
                  Cleaning product
                </p>
              </div>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BlogPostScetion;
