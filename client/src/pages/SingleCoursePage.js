import React from "react";
import SingleCourse from "../components/Normal/Main/Courses/CourseCard/SingleCourse/SingleCourse";
import Footer from "../components/Normal/Footer/Footer";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
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
