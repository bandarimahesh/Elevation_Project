import React, { useState } from "react";
import {
  AllCoursesSection,
  AllCoursesWrapper,
  AllCoursesWrapper1,
  AllCoursesWrapper2,
  FaSearchIcon,
  LeftColHeading,
  LeftColHeadingText,
  LeftColOption,
  LeftColOptionSelected,
  LineAfter,
  MainTitle,
  RightColOptions,
  SearchBoxDiv,
  SearchBoxInput,
  SearchForm,
  SelectText,
  RightColDiv,
} from "./AllCoursesElements";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
const AllCourses = () => {
  // const [cat, setCat] = useState();
  const [searchItem, setSearchItem] = useState("");
  const searchEngineAll = async (event) => {
    event.preventDefault();
    const response = await axios.get("api/courses/");
    console.log(response.data);
  };
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
            <RightColDiv>
              <SelectText>Category:</SelectText>
              <LeftColOptionSelected>
                <LeftColOption value="choose">Choose Below</LeftColOption>
                <LeftColOption>Software Development</LeftColOption>
                <LeftColOption>It Skills</LeftColOption>
                <LeftColOption>Domain</LeftColOption>
                <LeftColOption>Soft Skills</LeftColOption>
                <LeftColOption>Training & Hr</LeftColOption>
              </LeftColOptionSelected>
            </RightColDiv>
            <RightColDiv>
              <SelectText>Choose the AllCourses:</SelectText>
              <LeftColOptionSelected>
                <LeftColOption value="choose">Choose Below</LeftColOption>
                <LeftColOption>Python</LeftColOption>
                <LeftColOption>React Js</LeftColOption>
                <LeftColOption>CSS</LeftColOption>
                <LeftColOption>Web Development</LeftColOption>
                <LeftColOption>Java</LeftColOption>
              </LeftColOptionSelected>
            </RightColDiv>
            <SearchBoxDiv>
              <SearchForm>
                <SearchBoxInput
                  placeholder="Search any course"
                  value={searchItem}
                  onChange={(event) => setSearchItem(event.target.value)}
                ></SearchBoxInput>
                <FaSearchIcon onClick={searchEngineAll} />
              </SearchForm>
            </SearchBoxDiv>
          </RightColOptions>
        </AllCoursesWrapper1>
        <AllCoursesWrapper2>
          <CourseCard />
        </AllCoursesWrapper2>
      </AllCoursesWrapper>
    </AllCoursesSection>
  );
};

export default AllCourses;
