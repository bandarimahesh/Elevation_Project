import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import AllCourse from "../components/User/Courses/AllCourses/AllCourses";

const AllCourses = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <AllCourse />
      <Footer />
    </React.Fragment>
  );
};

export default AllCourses;
