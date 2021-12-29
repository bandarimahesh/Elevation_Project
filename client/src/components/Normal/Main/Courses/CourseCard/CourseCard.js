import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  CourseCardDiv,
  CourseSectionDiv,
  CourseBody,
  CourseImgBox,
  CourseImg,
  CourseTitleBox,
  CourseTitleH1,
  CourseReviewsBox,
  CourseReviewsP,
  CoursePrice,
  TrainerBox,
  TrainerImg,
  TrainerTitleP,
  TrainerMore,
  TrainerDetails,
  CourseIconLike,
  CourseAddCart,
} from "./CourseCardElements";
const CourseCard = () => {
  const [isLiked, setIsLiked] = useState(true);

  const onLikeFunc = () => {
    setIsLiked(!isLiked);
  };
  const courseId = 5;
  const trainerId = 6;
  return (
    <CourseSectionDiv>
      <CourseCardDiv>
        {isLiked ? (
          <CourseIconLike onClick={onLikeFunc}>
            <i class="far fa-heart"></i>
          </CourseIconLike>
        ) : (
          <CourseIconLike onClick={onLikeFunc}>
            <i class="fas fa-heart" style={{ color: "red" }}></i>
          </CourseIconLike>
        )}

        <CourseBody>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/courses/${courseId}`}
          >
            <CourseImgBox>
              <CourseImg
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="course picture"
              />
            </CourseImgBox>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/courses/${courseId}`}
          >
            <CourseTitleBox>
              <CourseTitleH1>The python bootcamp</CourseTitleH1>
            </CourseTitleBox>
          </Link>
          <CourseReviewsBox>
            <CourseReviewsP>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </CourseReviewsP>
            <CoursePrice>Price : $499</CoursePrice>
            <CourseAddCart>
              Add To <FaShoppingCart />
            </CourseAddCart>
          </CourseReviewsBox>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/trainers/${trainerId}`}
          >
            <TrainerBox>
              <TrainerDetails>
                <TrainerImg src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <TrainerTitleP>The Trainer Name</TrainerTitleP>
              </TrainerDetails>
              <TrainerMore>Know More</TrainerMore>
            </TrainerBox>
          </Link>
        </CourseBody>
      </CourseCardDiv>
    </CourseSectionDiv>
  );
};

export default CourseCard;
