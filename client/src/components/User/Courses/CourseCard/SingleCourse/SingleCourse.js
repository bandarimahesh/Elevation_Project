import React from "react";
import {
  SingleCourseSect,
  SingleCourseSection,
  SingleCourseTitle,
  SingleCourseWrapper,
  LineAfter,
} from "./SingleCourseElements";

const SingleCourse = () => {
  return (
    <SingleCourseSect>
      <SingleCourseSection>
        <SingleCourseWrapper>
          <SingleCourseTitle>Single Course </SingleCourseTitle>
          <LineAfter />
        </SingleCourseWrapper>
      </SingleCourseSection>
    </SingleCourseSect>
  );
};

export default SingleCourse;
