import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  SearchForm,
  SearchBoxInput,
  FaSearchIcon,
} from "./CourseElements";
import DomainCourses from "./CatCourses/DomainCourses";
import SoftwareCourses from "./CatCourses/SoftwareCourses";
import ItSkillsCourses from "./CatCourses/ItSkillsCourses";
import GoToTop from "../../GoToTop";
const Courses = () => {
  const [searchItem, setSearchItem] = useState("");
  const searchEngineAll = (event) => {
    event.preventDefault();
  };
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
            <SelectText>Choose the Course:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption value="choose">Choose Below</LeftColOption>
              <LeftColOption value="python">Python</LeftColOption>
              <LeftColOption value="react">React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected>
            <SearchForm onSubmit={searchEngineAll}>
              <SearchBoxInput
                placeholder="Search any course"
                onChange={(event) => setSearchItem(event.target.value)}
              ></SearchBoxInput>
              <FaSearchIcon />
            </SearchForm>
            {/* <SelectText>Choose the Course:</SelectText>
            <LeftColOptionSelected>
              <LeftColOption value="choose">Choose Below</LeftColOption>
              <LeftColOption>Python</LeftColOption>
              <LeftColOption>React Js</LeftColOption>
              <LeftColOption>CSS</LeftColOption>
              <LeftColOption>Web Development</LeftColOption>
              <LeftColOption>Java</LeftColOption>
            </LeftColOptionSelected> */}
          </RightColOptions>
        </CourseWrapper1>
        <CourseWrapper2>
          <CourseCardFlex>
            <CourseCardDivFlex>
              <CourseCardTitle>RPA Training :</CourseCardTitle>
              <SoftwareCourses searchItem={searchItem} /> <BorderDiv />
            </CourseCardDivFlex>
          </CourseCardFlex>
          <CourseCardFlex>
            <CourseCardTitle>It Skills : </CourseCardTitle>
            <ItSkillsCourses searchItem={searchItem} />
            <BorderDiv />
          </CourseCardFlex>
          <CourseCardFlex>
            <CourseCardTitle>Domain Training :</CourseCardTitle>
            <DomainCourses searchItem={searchItem} />
            <BorderDiv />
          </CourseCardFlex>
        </CourseWrapper2>
      </CourseWrapper>
      <ClickMoreBox>
        <Link to={`/courses`}>
          <ClickMore>Click To All our Courses</ClickMore>
        </Link>
      </ClickMoreBox>
      <GoToTop />
    </CourseSection>
  );
};

export default Courses;
