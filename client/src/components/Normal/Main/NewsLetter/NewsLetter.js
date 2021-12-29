import React from "react";

import {
  NewsLetterSect,
  NewsLetterSection,
  NewsLetterTitle,
  NewsLetterWrapper,
  LineAfter,
} from "./NewsLetterElements";

const NewsLetter = () => {
  return (
    <NewsLetterSect>
      <NewsLetterSection>
        <NewsLetterWrapper>
          <NewsLetterTitle>Subscribe to our newsletter</NewsLetterTitle>
          <LineAfter />
        </NewsLetterWrapper>
      </NewsLetterSection>
    </NewsLetterSect>
  );
};

export default NewsLetter;
