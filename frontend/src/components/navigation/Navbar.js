import React, { useState } from "react";

import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";
import Images from "../../constants/Images";
import { useEffect } from "react";
// import {motion} from "framer-motion";

const Navbar = () => {
  const { pathname } = useLocation();
  const activeLink =
    "border-b-4 px-[2px] mr-[4px] font-bold font-poppins border-[#00A5E2] text-[#23146D]  text-[16px]";
  const normalLink = "";
  let [open, setOpen] = useState(false);
  const [isCourse, setIsCourse] = useState(
    window.location.href.includes("course")
  );
  const [isBlog, setIsBlog] = useState(
    window.location.href.includes("blog")
  )
  useEffect(() => {
    setIsCourse(window.location.href.includes("course"));
  }, [pathname]);
  useEffect(() => {
    setIsBlog(window.location.href.includes("blog"));
  }, [pathname]);
  return (
    <div className="w-full fixed top-0 left-0 z-50 lg:px-12 md:px-8">
      <div className="md:flex items-center lg:justify-between md:justify-between py-4 px-4 conatiner max-w-[1450px] mx-auto">
        <div className="cursor-pointer flex items-center lg:w-[80px] lg:h-[90px] w-[50px] h-[50px]">
         <Link to="/" >
         <img src={Images.Logo} alt="Logo" /></Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-5 top-6 cursor-pointer md:hidden"
        >
          {open ? <RiCloseFill /> : <HiOutlineBars3BottomRight />}
        </div>
        {/* <Search />     */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
         open ? "top-20  bg-[#F2D03B] text-[#fff] " : "top-[-490px] text-[#fff]"
       }`}
        >
          <li
            className={`md:ml-8 text-[16px] ${
              isCourse ? "text-white" : ""
            } ${isBlog ? "text-[#fff]" : ""} font-normal font-["Poppins"] text-[#0D1213] md:my-0 my-7 not-italic leading-3`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li
            className={`${
              isCourse ? "text-white" : ""
            } ${isBlog ? "text-[#fff]" : ""} md:ml-8 text-[16px] font-normal font-["Poppins"] text-[#0D1213] md:my-0 my-7 not-italic  leading-3`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li
            className={`${
              isCourse ? "text-white" : ""
            } ${ isBlog ? "text-[#fff]" : ""} md:ml-8 text-[16px] text-[#0D1213] font-normal font-["Poppins"] md:my-0 my-7 not-italic leading-3`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/career"
            >
              Career
            </NavLink>
          </li>
          <li
            className={`${
              isCourse ? "text-white" : ""
            } ${ isBlog ? "text-[#fff]" : ""} md:ml-8 text-[16px] font-normal font-["Poppins"] text-[#0D1213] md:my-0 my-7 not-italic leading-3`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        <Link to='/contact'>
        <button className="border-none leading-normal font-['Poppins'] font-normal] border-inherit px-5 sm:px-4 py-1 bg-[#23146D] 
        text-[#fff] text-[16px] rounded-[10px] lg:mx-4 md:mx-4 mx-0 not-italic text-base font-medium">
         Contact Us
        </button>
        </Link>
      </ul>   
      </div>
    </div>
  );
};

export default Navbar;
