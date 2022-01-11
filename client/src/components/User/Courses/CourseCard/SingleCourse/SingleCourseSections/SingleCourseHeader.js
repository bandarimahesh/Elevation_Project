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
const SingleCourseHeader = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const quantity = 1;
  const addToCartHandler = () => {
    dispatch(
      addCourse({ data, quantity, price: data.data.course_price * quantity })
    );
  };
  return (
    <SingleCourseSect>
      <SingleCourseSection>
        <SingleCourseWrapper>
          {data?.data?.map((course) => (
            <SingleCourseFlex key={course.course_id}>
              <HeaderRightCol>
                <SingleCourseTitle>{course.course_name}</SingleCourseTitle>
                <CourseDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ratione facilis dolor ex expedita quae!
                </CourseDescription>
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
                  <HeaderRightImg src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <FlexBox>
                    <Label>Price:</Label>
                    <HeaderRightPriced>
                      Rs {course.course_price}
                    </HeaderRightPriced>
                  </FlexBox>
                  <FlexBox>
                    <AddToCartBtn onClick={addToCartHandler}>
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
