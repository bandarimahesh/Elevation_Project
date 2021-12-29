import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import Dropdown from "../components/Normal/Navbar/Dropdown";
import AllCourses from "../components/Normal/Main/Courses/AllCourses/AllCourses";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
const AllCoursesPage = () => {
  return (
    <>
      <NavBarAndRes />
      <Dropdown />
      <AllCourses />
      <Footer />
    </>
  );
};

export default AllCoursesPage;
