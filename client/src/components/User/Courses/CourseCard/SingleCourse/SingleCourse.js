import React from "react";
import CourseContent from "./SingleCourseSections/CourseContent";
import CourseTrainerSingle from "./SingleCourseSections/CourseTrainerSingle";
import SingleCourseHeader from "./SingleCourseSections/SingleCourseHeader";

const SingleCourse = () => {
  return (
    <>
      <SingleCourseHeader />
      <CourseContent />
      <CourseTrainerSingle />
    </>
  );
};

export default SingleCourse;
