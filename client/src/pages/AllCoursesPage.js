import React from "react";
import Footer from "../components/User/Footer/Footer";
import AllCourse from "../components/User/Courses/AllCourses/AllCourses";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const AllCourses = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <AllCourse />
      <Footer />
    </React.Fragment>
  );
};

export default AllCourses;
