import React from "react";
import {
  ReviewsSect,
  ReviewsSection,
  ReviewsTitle,
  ReviewsWrapper,
  LineAfter,
} from "./ReviewsElements";

const Reviews = () => {
  return (
    <ReviewsSect>
      <ReviewsSection>
        <ReviewsWrapper>
          <ReviewsTitle>What our students Said</ReviewsTitle>
          <LineAfter />
        </ReviewsWrapper>
      </ReviewsSection>
    </ReviewsSect>
  );
};

export default Reviews;
