import React from "react";

import {
  FooterSect,
  FooterSection,
  FooterTitle,
  FooterWrapper,
  LineAfter,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterSect>
      <FooterSection>
        <FooterWrapper>
          <FooterTitle>Footer</FooterTitle>
          <LineAfter />
        </FooterWrapper>
      </FooterSection>
    </FooterSect>
  );
};

export default Footer;
