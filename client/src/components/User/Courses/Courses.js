import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";
import {
  ClickMore,
  ClickMoreBox,
  CourseCardFlex,
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
  CourseCardTitle,
  CourseCardDivFlex,
  BorderDiv,
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
              <LeftColOption value="choose">Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>
            <SelectText>Choose the Course:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption value="choose">Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>
          </RightColOptions>
        </CourseWrapper1>
        <CourseWrapper2>
          <CourseCardFlex>
            <CourseCardDivFlex>
              <CourseCardTitle>
                Software Development <br /> Training :
              </CourseCardTitle>
              <CourseCard /> <BorderDiv />
            </CourseCardDivFlex>
          </CourseCardFlex>
          <CourseCardFlex>
            <CourseCardTitle>It Skills : </CourseCardTitle>
            <CourseCard /> <BorderDiv />
          </CourseCardFlex>
          <CourseCardFlex>
            <CourseCardTitle>Domain Training :</CourseCardTitle>
            <CourseCard /> <BorderDiv />
          </CourseCardFlex>
        </CourseWrapper2>
      </CourseWrapper>
      <ClickMoreBox>
        <Link to={`/courses`}>
          <ClickMore>Click To All our Courses</ClickMore>
        </Link>
      </ClickMoreBox>
    </CourseSection>
  );
};

export default Courses;
