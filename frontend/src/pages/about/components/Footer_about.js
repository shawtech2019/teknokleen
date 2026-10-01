import React from 'react'
import Images from '../../../constants/Images'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {AiFillTwitterCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Footer_about = () => {
    const currentYear = new Date().getFullYear();
  return (
  <>
   <section className='w-full py-auto'>
    <section className='flex items-center justify-center'>
        <section className='flex flex-col sm:flex-row  items-center justify-center lg:space-x-[50rem] md:space-x-[20rem]'>
            <img src={Images.Logo} alt='logo' className='w-[79px] h-[60px]' />
            <ul className='flex items-center justify-center lg:space-x-[4rem] md:space-x-[2rem] space-x-[2rem] lg:py-0 py-[2rem]'>
              <Link to="/about">
                <li className='text-[#0D1111] font-poppins font-semibold text-lg leading-6'>About Us</li>
                </Link>
                <Link to="/career">
                <li  className='text-[#0D1111] font-poppins font-semibold text-lg leading-6'>Career</li></Link>
               <Link to="/blog">
                <li  className='text-[#0D1111] font-poppins font-semibold text-lg leading-6'>Blog</li>
                </Link>
                <Link to="/contact">
                <li  className='text-[#0D1111] font-poppins font-semibold text-lg leading-6'>Contact</li>
                </Link>
            </ul>
        </section>
    </section>
    <section  className='absolute lg:left-[4.5rem] lg:mt-[2rem] md:mt-[2rem] mx-[2rem] '>
        <h1 className=' text-[#222223] font-poppins text-[18px] font-normal font-weight-400 leading-[8px] py-[1rem]'>Updates right to your Inbox</h1>
       <form className='flex flex-col sm:flex-row lg:items-center justify-center lg:space-x-[2rem] md:space-x-[2rem] md:space-y-0 space-y-[1rem] lg:space-y-0 lg:mt-[1rem]'>
       <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-[10px] relative block
                  w-[320px] h-[54px] px-3 py-2 border border-[#6EC1E4]
                  placeholder-[#222223] font-poppins text-gray-900
                  focus:outline-none focus:ring-[#23146D]
                  focus:border-[#23146D] focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <button type="submit" className="lg:w-[116px] lg:h-[54px] md:w-[116px]  md:h-[54px] w-[100px] h-[40px] rounded-[10px] bg-[#23146D] font-poppins text-base text-[#fff] font-normal leading-[32px] ">Submit</button>
       </form>
    </section>
    <section className="mt-[12rem] flex flex-col-reverse sm:flex-row items-center justify-center lg:space-x-[36rem] md:space-x-[12rem]">
        <footer className="flex items-center justify-center lg:space-x-[2rem] space-x-4 lg:mt-0 md:mt-0 mt-[8rem] text-[#0D1111] font-['Poppins'] lg:text-[18px] text-[12px] font-semibold leading-32">
          <p>&copy; {currentYear} Teknokleen..</p>
          <Link to="/privacy-policy">
          <h2>Privacy Policy</h2>
          </Link>s
          <h2>Terms of use </h2>
        </footer>
        <section className="flex items-center justify-center lg:mt-0 md:mt-0 mt-[1rem] space-x-6">
        <Link to="https://web.facebook.com/profile.php?id=61571811458609" target="_blank">
                <div ><FaFacebook className="w-[40px] h-[40px] rounded-[400px]" color="#000"  /></div>
               </Link>
                <div><FaLinkedin className="w-[40px] h-[40px] rounded-[400px]"  /></div>
               <Link to="https://www.instagram.com/teknokleengroup/" target="_blank">
               <div><FaInstagram className="w-[40px] h-[40px] rounded-[400px]" /></div>
               </Link>
               <Link to="https://x.com/TeknokleenGroup">c
               <div><AiFillTwitterCircle className="w-[40px] h-[40px] rounded-[400px]" /></div>
               </Link>
        </section>
      </section>
   </section>
  </>
  )
}

export default Footer_about