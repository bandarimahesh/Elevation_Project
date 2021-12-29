import React from "react";
import Dropdown from "../components/Normal/Navbar/Dropdown";
import Navbar from "../components/Normal/Navbar/Navbar";
import SingleCourse from "../components/Normal/Main/Courses/CourseCard/SingleCourse/SingleCourse";
import Footer from "../components/Normal/Footer/Footer";
const SingleCoursePage = () => {
  return (
    <>
      <Navbar />
      <Dropdown />
      <SingleCourse />
      <Footer />
    </>
  );
};

export default SingleCoursePage;
