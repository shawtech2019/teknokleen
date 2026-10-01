import React, {useState} from 'react'
import  { advanceImage } from "../../../constants/school_images"

import Data from "./advance_business_accordion_components/Data";
import Register from "./advance_business_accordion_components/Register";
import RegistrationForm from './RegistrationForm';

function AdvancedBusiness() {
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
        <div className="grid  w-full gap-5 lg:grid-cols-2 grid-cols-1">
          <div className="relative order-last mb-[100px] max-h-[500px]">
            <img src={advanceImage} className="w-[full] max-h-[500px] object-cover object-top rounded-[10px]"
            />
          </div>
          <div className="p-3">
            <h1 className="lg:text-[40px] md:text-[36px] text-[20px] font-[500] leading-tight text-[#23146D] font-[''gentium-book-basic''] leading">
              ADVANCED BUSINESS MANAGERS TRAINING
            </h1>
            <div className="mt-4 ">
             <Data />
            </div>
            <div>
              <p>
                For phone enquiries click call: <br />
                01 453 6549, 0803 844 0430, 0703 120 9591
              </p>
              <div className="mt-5"></div>
              <button onClick={openModal} className="bg-[#23146D] hover:bg-[#23146D] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[35px] rounded-[10px] text-[#FFC640] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
                Register Here
              </button>
              <RegistrationForm amt={120000} title="ADVANCED BUSINESS MANAGERS TRAINING" isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AdvancedBusiness;
