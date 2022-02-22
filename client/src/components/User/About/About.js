import React from "react";

import GoToTop from "../../GoToTop";
import {
  AboutSect,
  AboutSection,
  AboutTitle,
  AboutWrapper,
  LineAfter,
} from "./AboutElements";

const About = () => {
  return (
    <AboutSect>
      <AboutSection>
        <AboutWrapper>
          <AboutTitle>About Us</AboutTitle>
          <LineAfter />
        </AboutWrapper>
      </AboutSection>
      <GoToTop />
    </AboutSect>
  );
};

export default About;
