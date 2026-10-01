import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../constants/Images";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {AiFillTwitterCircle} from "react-icons/ai"


const FooterSection = () => {
    const currentYear = new Date().getFullYear();

  return (
    <section className="lg:flex md:flex items-center justify-center w-[100%] h-[135px] lg:mt-0 mt-[4rem] lg:py-0 py-[2rem]  ">
      <section className=" flex flex-col sm:flex-row  space-y-[2rem] items-center justify-center lg:space-x-[16rem]">
        <section>
          <img src={Images.Logo} />
        </section>
        <footer className="flex items-center justify-center lg:space-x-[2rem] space-x-2 text-[#0D1111] font-['Poppins'] lg:text-18 text-[12px] font-semibold leading-32">
          <p>&copy; {currentYear} Teknokleen..</p>
         <Link to={"/privacy-policy"}>
         <h2>Privacy Policy</h2>
         </Link>
          <h2>Terms of use </h2>
        </footer>
        <section className="flex items-center justify-center space-x-6">
       <Link to="https://web.facebook.com/profile.php?id=61571811458609" target="_blank">
        <div ><FaFacebook className="w-[40px] h-[40px] rounded-[400px]" color="#000"  /></div>
       </Link>
        <div><FaLinkedin className="w-[40px] h-[40px] rounded-[400px]"  /></div>
       <Link to="https://www.instagram.com/teknokleengroup/" target="_blank">
       <div><FaInstagram className="w-[40px] h-[40px] rounded-[400px]" /></div>
       </Link>
       <Link to="https://x.com/TeknokleenGroup">
       <div><AiFillTwitterCircle className="w-[40px] h-[40px] rounded-[400px]" /></div>
       </Link>
        </section>
      </section>
    </section>
  );
};

export default FooterSection;
