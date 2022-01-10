import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import SingleCourse from "../components/User/Courses/CourseCard/SingleCourse/SingleCourse";
const SingleCoursePage = () => {
  return (
    <>
      <NavbarRes />
      <SingleCourse />
      <Footer />
    </>
  );
};

export default SingleCoursePage;
