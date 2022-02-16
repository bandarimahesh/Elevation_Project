import React from "react";
import Footer from "../components/User/Footer/Footer";
import AllCourse from "../components/User/Courses/AllCourses/AllCourses";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const AllCourses = () => {
  return (
    <>
      <NavbarRes />
      <AllCourse />
      <Footer />
    </>
  );
};

export default AllCourses;
