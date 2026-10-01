import React, {useState} from "react";
import {
  ourCoursesImage,
} from "../../../constants/school_images";
import Data from "./accordion_components/Data";
import RegistrationForm from "./RegistrationForm";

function OurCourses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const unleashHeadStyle = {
    color: "#00A5E2",
    fontSize: "45px",
    fontWeight: "700",
    fontFamily: "poppins",
  };
  return (
    <section className="font-['poppins'] lg:mx-[4rem] mx-[2rem] lg:flex items-center">
      <section className="md:mt-20 w-full mt-20">
        <h3 className="text-center font-['gentium-book-basic'] lg:text-[64px] md:text-[50px] text-[32px] font-[600] text-[#23146D]">
          Our Courses
        </h3>
        <div className="grid  w-full gap-5 lg:grid-cols-2 grid-cols-1 mt-[4rem]">
          <div className="relative lg:order-first order-last mb-[100px] max-h-[500px]">
            <img
              src={ourCoursesImage}
              className="w-[full] max-h-[500px] object-cover object-top"
            />
          </div>
          <div className="">
            <h1 className="lg:text-[40px] md:text-[32px] text-[24px] lg:text-start md:text-start text-center font-[500] leading-tight text-[#23146D] font-[''gentium-book-basic''] leading">
              ENTREPRENEURIAL COURSE FOR OPERATORS OF CLEANING BUSINESS
            </h1>
            <div className="relative mt-[4rem]">
              <Data />
            </div>
            <div>
              <p>
                For phone enquiries click call: <br />
                01 453 6549, 0803 844 0430, 0703 120 9591
              </p>
              <div className="mt-5"></div>
              <button onClick={openModal} className="bg-[#FFC640] hover:bg-[#FFC640] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[35px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
                Register here
              </button>
              <RegistrationForm amt={180000} title="ENTREPRENEURIAL COURSE FOR OPERATORS OF CLEANING BUSINESS" isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurCourses;