import React from "react";
import {
  SingleCourseSect,
  SingleCourseSection,
  SingleCourseWrapper,
  SingleCourseFlex,
  HeaderRightCol,
  HeaderLeftCol,
  SingleCourseTitle,
  CourseDescription,
  RatingsCourse,
  PeopleRegistered,
  FlexBox,
  Label,
  CourseLanguages,
  LastUpdated,
  HeaderRightImg,
  HeaderLeftBox,
  HeaderRightPriced,
  AddToCartBtn,
  WishList,
  BuyNowBtn,
} from "./HeaderElements";
import { addCourse } from "../../../../../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SingleCourseHeader = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = (course) => {
    dispatch(addCourse(course));
    navigate("/trainee/cart");
  };
  return (
    <SingleCourseSect>
      <SingleCourseSection>
        <SingleCourseWrapper>
          {data?.data?.map((course) => (
            <SingleCourseFlex key={course.course_id}>
              <HeaderRightCol>
                <SingleCourseTitle>{course.course_title}</SingleCourseTitle>
                <CourseDescription>{course.course_desc} </CourseDescription>
                <FlexBox>
                  <Label>Rating :</Label>
                  <RatingsCourse> {course.course_rating} stars</RatingsCourse>
                </FlexBox>
                <FlexBox>
                  <Label>No of People Registered :</Label>
                  <PeopleRegistered>
                    {course.course_participants}
                  </PeopleRegistered>
                </FlexBox>
                <FlexBox>
                  <Label>Last update on :</Label>
                  <LastUpdated> 23/10/2021</LastUpdated>
                </FlexBox>
                <FlexBox>
                  <Label>Languages :</Label>
                  <CourseLanguages> Hindi, English</CourseLanguages>
                </FlexBox>
              </HeaderRightCol>
              <HeaderLeftCol>
                <HeaderLeftBox>
                  <HeaderRightImg src="https://t3.ftcdn.net/jpg/02/84/02/36/360_F_284023634_KjMhFyIQvm6Skawcp0izYTsJKvhCPLoZ.jpg" />
                  <FlexBox>
                    <Label>Price:</Label>
                    <HeaderRightPriced>
                      Rs {course.course_price}
                    </HeaderRightPriced>
                  </FlexBox>
                  <FlexBox>
                    <AddToCartBtn onClick={() => addToCartHandler(course)}>
                      Add To Cart
                    </AddToCartBtn>
                    <WishList>Like</WishList>
                  </FlexBox>
                  <BuyNowBtn>Buy Now</BuyNowBtn>
                </HeaderLeftBox>
              </HeaderLeftCol>
            </SingleCourseFlex>
          ))}
        </SingleCourseWrapper>
      </SingleCourseSection>
    </SingleCourseSect>
  );
};

export default SingleCourseHeader;
