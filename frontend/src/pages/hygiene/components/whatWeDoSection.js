import React, { useState } from "react";
import Images from "../../../constants/Images";
import { BsArrowRight } from "react-icons/bs";
import { what_we_do } from "../../../data/what_we_do";
import HygieneModal from "./hygiene_modal";

const WhatWeDoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalID, setShowModalID] = useState("one-off-cleaning");

  const openModal = (id) => {
    setShowModalID(id);
    setShowModal(true);
  };
  return (
    <section className=" lg:h-[100vh] md:h-[50vh] h-[100vh] lg:py-20 md:py-20 md:mb-[-1rem] mb-[16rem]">
      {/* modal */}

      {showModal && (
        <HygieneModal
          id={modalID}
          onClose={() => {
            setShowModalID("");
            setShowModal(false);
          }}
        />
      )}
      <h1 className="text-center py-6 pb-12 font-bold tracking-[1px] lg:text-[64px] md:text-[60px] text-[32px] text-[#23146D] font-gentium-book-basic ">
        What we do
      </h1>
      <section className="flex items-center justify-center relative">
        <div class="absolute w-[5rem] h-[5rem] border-t-[0.5rem] border-l-[0.5rem] border-[#FCDDEC] rounded-tl-[20px] top-0 left-[3.5rem] transform rotate-[45%]" />
        <div class="absolute w-[5rem] h-[5rem] border-t-[0.5rem] border-l-[0.5rem] border-[#FCDDEC] rounded-tl-[20px] bottom-0 right-[3.5rem] transform rotate-[180deg]" />
        <section className="lg:flex lg:items-center lg:justify-center md:flex items-center justify-center md:mx-4 gap-6 lg:space-y-0 space-y-8">
          {what_we_do.map((item, i) => (
            <section key={i} className="flex items-center justify-center">
              <section className="lg:w-[425px] lg:h-[436px] md:w-[250px] md:h-[250px] w-[300px] h-[300px] lg:py-10 md:py-4 lg:px-4 py-12 rounded-[20px] bg-[#fff] shadow-2xl justify-center items-center text-center  ">
                <div className="flex justify-center relative">
                  <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[-0.8rem] left-[7rem] rounded-tr-[10px]  lg:flex items-center justify-center rounded-br-[5px] rounded-bl-[18px] bg-[#86CFF2]" />
                  <img
                    src={item.image}
                    alt="cleaning service not showing"
                    className="md:w-[50px] md:h-[50px] object-contain lg:w-[100px] z-20 lg:h-[100px] w-[40px] h-[40px]"
                  />
                  <div class="lg:w-[40px] lg:h-[39.2px] lg:relative rounded-tl-[5px] top-[4.5rem] left-[-7rem] rounded-tr-[18px]  flex items-center justify-center rounded-br-[5px] rounded-bl-[10px] bg-[#86CFF2]" />
                </div>
                <br />
                <h2 className='p-4 text-[#23146D] font-["Poppins"] md:text-[12px] lg:text-[20px] text-[12px] not-italic leading-normal font-semibold '>
                  {item.title}
                </h2>
                <p className="text-[#222223] text-[10px] md:text-[10px] lg:text-[16px] lg:leading-[26px] leading-0 font-normal px-4 lg:px-0 ">
                  {item.content}
                </p>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => openModal(item.id)}
                    className="lg:pt-8 md:pt-4  pt-4 flex items-center justify-center text-[10px] lg:text-[18px] md:text-[12px] font-semibold text-[#86CFF2] "
                  >
                    Learn more...
                    <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default WhatWeDoSection;
