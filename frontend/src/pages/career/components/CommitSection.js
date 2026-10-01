import React from "react";
import Images from "../../../constants/Images";

const CommitSection = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-[4rem]">
        <section className="lg:flex flex flex-col sm:flex-row  items-center justify-center lg:gap-5 relative lg:left-[-4rem]">
            <img
              src={Images.Commit_section}
              alt="Missing mission"
              className="lg:w-[100%] lg:h-[100%] md:w-[50%] md:h-[100%]"
            />
            <section className=" flex items-center justify-center">
              <section className=" lg:mx--0 md:mx-0 mx-[2rem] ">
                <h1 className="lg:w-[614px] text-[#23146D)] text-center font-gentium-book-basic lg:text-start md:text-start font-bold text-[#23146D] lg:text-[64px] text-[24px] lg:leading-[64px]">
                  Our Commitment to Your Growth
                </h1>
                <p className="text-[#0D1111] lg:w-[610px] items-center justify-center text-justify lg:text-[16px] md:text-[14px] lg:mt-4 mt-[2rem]  text-[10px] font-medium leading-[1.85]">
                  At Teknokleen, we prioritize the personal and professional
                  growth of our employees. Their development is crucial to the
                  future of our entire Group. We foster an inclusive and
                  collaborative environment, promoting openness, respect, and
                  trust. Our diverse team brings together unique perspectives
                  and talents, enabling us to deliver exceptional results by
                  addressing our client’s needs, solving their problems, and
                  introducing innovative ideas 
                  <br />
                  <br />
                  To provide this level of service,
                  we strive to hire, develop, and retain the most exceptional
                  individuals in the industry. We believe that our people are
                  the driving force behind our success. 
                  <br />
                  <br />
                  If you are interested in
                  a career with the companies within the Teknokleen Group,
                  please explore our job opportunities to find a role that
                  matches your skills and aspirations. Alternatively, you can
                  create a profile and submit your resume for consideration.
                  Together, we will shape a successful future in the hygiene
                  industry.
                </p>
                <button className="bg-[#FFC640] hover:bg-[#00A5E2] hover:tracking-[1px] mt-[2rem] md:w-[203px] md:h-[64px] w-[150px] h-[40px] rounded-[10px] text-[#23146D] font-normal font-['Poppins'] lg:text-[18px] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
            Click Here To Begin
          </button>
              </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default CommitSection;