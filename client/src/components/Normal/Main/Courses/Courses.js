import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import {
  ClickMore,
  ClickMoreBox,
  CourseSection,
  CourseWrapper,
  CourseWrapper1,
  CourseWrapper2,
  LeftColHeading,
  LeftColHeadingText,
  LeftColOption,
  LeftColOptionSelected,
  LineAfter,
  MainTitle,
  RightColOptions,
  SelectText,
} from "./CourseElements";
const Courses = () => {
  return (
    <CourseSection>
      <CourseWrapper>
        <MainTitle>Our Courses</MainTitle>
        <LineAfter />
        <CourseWrapper1>
          <LeftColHeading>
            <LeftColHeadingText>
              Find the course that you love!
            </LeftColHeadingText>
          </LeftColHeading>
          <RightColOptions>
            <SelectText>Category:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption selected>Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>

            <SelectText>Choose the Course:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption selected>Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>
          </RightColOptions>
        </CourseWrapper1>
        <CourseWrapper2>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </CourseWrapper2>
      </CourseWrapper>
      <ClickMoreBox>
        <ClickMore>Click To know more</ClickMore>
      </ClickMoreBox>
    </CourseSection>
  );
};

export default Courses;
