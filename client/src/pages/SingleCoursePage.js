import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import SingleCourse from "../components/User/Courses/CourseCard/SingleCourse/SingleCourse";
const SingleCoursePage = () => {
  return (
    <>
      <NavBarAndRes />;
      <SingleCourse />
      <Footer />
    </>
  );
};

export default SingleCoursePage;
