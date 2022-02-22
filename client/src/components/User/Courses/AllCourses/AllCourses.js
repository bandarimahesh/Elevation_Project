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
  RightColOptions,
  SearchBoxDiv,
  SearchBoxInput,
  SearchForm,
  SelectText,
  RightColDiv,
  RightCOlDivItem,
} from "./AllCoursesElements";
import CourseCard from "../CourseCard/CourseCard";
import GoToTop from "../../../GoToTop";
const AllCourses = () => {
  const [category, setCategory] = useState("");
  const [searchItemAll, setSearchItemAll] = useState("");
  
  const searchEngineAll = async (event) => {
    event.preventDefault();
  };

  return (
    <AllCoursesSection>
      <AllCoursesWrapper>
        <AllCoursesWrapper1>
          <LeftColHeading>
            <LeftColHeadingText>
              Choose the course you want to become successful in your life
            </LeftColHeadingText>
          </LeftColHeading>
          <LeftColHeading>
            <RightColOptions>
              <RightCOlDivItem>
                <RightColDiv>
                  <SelectText>Category:</SelectText>
                  <LeftColOptionSelected
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <LeftColOption disabled>Choose Below</LeftColOption>
                    <LeftColOption value="software-development">
                      Software Development
                    </LeftColOption>
                    <LeftColOption value="it-skills">It Skills</LeftColOption>
                    <LeftColOption value="domain-skills">
                      Domain Skills
                    </LeftColOption>
                  </LeftColOptionSelected>
                </RightColDiv>
              </RightCOlDivItem>
              <RightCOlDivItem>
                <RightColDiv>
                  <SelectText>Choose the AllCourses:</SelectText>
                  <LeftColOptionSelected name="course">
                    <LeftColOption disabled>Choose Below</LeftColOption>
                    <LeftColOption>Python</LeftColOption>
                    <LeftColOption>React Js</LeftColOption>
                    <LeftColOption>CSS</LeftColOption>
                    <LeftColOption>Web Development</LeftColOption>
                    <LeftColOption>Java</LeftColOption>
                  </LeftColOptionSelected>
                </RightColDiv>
              </RightCOlDivItem>
              <RightCOlDivItem>
                <SearchBoxDiv>
                  <SearchForm>
                    <SearchBoxInput
                      placeholder="Search any course"
                      value={searchItemAll}
                      onChange={(event) => setSearchItemAll(event.target.value)}
                    ></SearchBoxInput>
                    <FaSearchIcon onClick={searchEngineAll} />
                  </SearchForm>
                </SearchBoxDiv>
              </RightCOlDivItem>
            </RightColOptions>
          </LeftColHeading>
        </AllCoursesWrapper1>
        <AllCoursesWrapper2>
          <CourseCard category={category} searchItemAll={searchItemAll} />
        </AllCoursesWrapper2>
      </AllCoursesWrapper>
      <GoToTop />
    </AllCoursesSection>
  );
};

export default AllCourses;
