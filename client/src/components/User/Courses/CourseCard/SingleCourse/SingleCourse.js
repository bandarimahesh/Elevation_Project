import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseContent from "./SingleCourseSections/CourseContent";
import CourseTrainerSingle from "./SingleCourseSections/CourseTrainerSingle";
import SingleCourseHeader from "./SingleCourseSections/SingleCourseHeader";
import axios from "axios";
const SingleCourse = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [oneCourse, setOneCourse] = useState({});
  useEffect(() => {
    try {
      const getOneCourse = async () => {
        const result = await axios.get(`/courses/full-course/${path}`);
        setOneCourse(result);
      };
      getOneCourse();
    } catch (error) {
      console.log(error.message);
    }
  }, [path]);
  return (
    <>
      <SingleCourseHeader data={oneCourse} />
      <CourseContent />
      <CourseTrainerSingle />
    </>
  );
};

export default SingleCourse;
