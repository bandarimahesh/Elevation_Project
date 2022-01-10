import React from "react";
import {
  AllCoursesSection,
  AllCoursesWrapper,
  AllCoursesWrapper1,
  AllCoursesWrapper2,
  LeftColHeading,
  LeftColHeadingText,
  LeftColOption,
  LeftColOptionSelected,
  LineAfter,
  MainTitle,
  RightColOptions,
  SearchBox,
  SearchBoxDiv,
  SearchForm,
  SelectText,
} from "./AllCoursesElements";
import CourseCard from "../CourseCard/CourseCard";
import { FaSearch } from "react-icons/fa";
const AllCourses = () => {
  return (
    <AllCoursesSection>
      <AllCoursesWrapper>
        <MainTitle>All our courses</MainTitle>
        <LineAfter />
        <AllCoursesWrapper1>
          <LeftColHeading>
            <LeftColHeadingText>
              Choose the course you want to become successful in your life
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
            <SelectText>Choose the AllCourses:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption value="choose">Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>
            <SearchBoxDiv>
              <SearchBox placeholder="Search"></SearchBox>
              <SearchForm>
                <FaSearch />
              </SearchForm>
            </SearchBoxDiv>
          </RightColOptions>
        </AllCoursesWrapper1>
        <AllCoursesWrapper2>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </AllCoursesWrapper2>
      </AllCoursesWrapper>
    </AllCoursesSection>
  );
};

export default AllCourses;
