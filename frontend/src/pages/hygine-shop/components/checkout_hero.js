import React, { useEffect, useRef, useState } from "react";
import Images from "../../../constants/Images";
import { motion, useScroll, useTransform } from "framer-motion";
import { HygieneBG } from "../../../constants/hygiene_images";
import { shopImage } from "../../../constants/hygiene_shop_images";
import { useParams } from "react-router-dom";
import { httpGetWithoutToken } from "../../../utils/http_util";

const HygieneShopChecktHero = () => {
  const params = useParams()
  const targetRef = useRef(null);
  const [category, setCategory] = useState({})
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });


  return (
    <section
      className="lg:mx-[4rem] text-center mx-[2rem] lg:flex items-center"
      ref={targetRef}
    >
      <section className="w-full overflow-hidden mt-[140px]">
        <section className="mx-auto">
          <section className="lg:p-0 mx-auto text-center md:-p-0"
          >
            <h1
              className="text-[#23146D] lg:text-[58px] mx-auto md:text-[50px] text-[24px] font-normal font-gentium-book-basic not-italic lg:leading-[99px] md:leading-[80px] leading-[40px]"
            >
              <b className="text-center"> 
                {params.product ? "Checkout Product" : "Checkout"}
              </b>
              <div className="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute lg:left-[40%] md:left-[60%]" />
            </h1>
          </section>
          <p
          className="w-[155px] h-[19px] text-center bg-[#E2F3FD] rounded-[5px] 
        text-[#23146D] mx-auto text-[12px] font-gochi-hand font-normal "
        >
        Hygiene Supermarket
        </p>
        </section>
       
      </section>
    </section>
  );
};

export default HygieneShopChecktHero;
