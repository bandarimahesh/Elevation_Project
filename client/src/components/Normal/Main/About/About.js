import React from "react";
import { LineAfter } from "../Courses/CourseElements";
import { AboutSect, AboutSection, AboutTitle, AboutWrapper } from "./AboutElements";

const About = () => {
  return (
    <AboutSect>
      <AboutSection>
        <AboutWrapper>
          <AboutTitle>About Us</AboutTitle>
          <LineAfter />
        </AboutWrapper>
      </AboutSection>
    </AboutSect>
  );
};

export default About;
