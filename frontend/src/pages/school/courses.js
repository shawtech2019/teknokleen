import React from "react";
import OurCourses from "./components/our_courses";
import AdvancedBusiness from "./components/advanceBusiness";
import Custodia from "./components/custodia";
import CoursesHero from "./components/CoursesHero";
import Footer_about from '../about/components/Footer_about'
import CustodiaStaff from "./components/CustodiaStaff";

const Courses = () => {
  return (
    <>
      <CoursesHero />
      <OurCourses />
      <AdvancedBusiness />
      <Custodia />
      <CustodiaStaff />
     <Footer_about />
    </>
  );
};

export default Courses;
