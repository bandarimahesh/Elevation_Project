import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  ReviewsSect,
  ReviewsSection,
  ReviewsTitle,
  ReviewsWrapper,
  LineAfter,
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./ReviewsElements";

const Reviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideHandleClick = (direction) => {
    if (direction === " left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <ReviewsSect>
      <ReviewsSection>
        <ReviewsWrapper>
          <ReviewsTitle>What our students Said</ReviewsTitle>
          <LineAfter />
          <Container>
            <Arrow direction="left" onClick={() => slideHandleClick("left")}>
              <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              <ImgContainer>
                <Image alt="review" src="" />
              </ImgContainer>
            </Wrapper>
            <Arrow direction="right" onClick={() => slideHandleClick("right")}>
              <ArrowRightOutlined />
            </Arrow>
          </Container>
        </ReviewsWrapper>
      </ReviewsSection>
    </ReviewsSect>
  );
};

export default Reviews;
