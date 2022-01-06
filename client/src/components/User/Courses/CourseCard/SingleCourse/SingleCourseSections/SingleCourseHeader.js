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
  CourseContentTitle,
  UlMenuContent,
  LieMenuContent,
  SingleCourseWrapper2,
} from "./HeaderElements";

const SingleCourseHeader = () => {
  return (
    <SingleCourseSect>
      <SingleCourseSection>
        <SingleCourseWrapper>
          <SingleCourseFlex>
            <HeaderRightCol>
              <SingleCourseTitle>
                The new python boot camp for year 2022
              </SingleCourseTitle>
              <CourseDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                ratione facilis dolor ex expedita quae!
              </CourseDescription>
              <FlexBox>
                <Label>Rating :</Label>
                <RatingsCourse> 5 stars</RatingsCourse>
              </FlexBox>
              <FlexBox>
                <Label>No of People Registered :</Label>
                <PeopleRegistered> 500</PeopleRegistered>
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
                  <Label>Price</Label>
                  <HeaderRightPriced> $500</HeaderRightPriced>
                </FlexBox>
                <FlexBox>
                  <AddToCartBtn>Add To Cart</AddToCartBtn>
                  <WishList>Like</WishList>
                </FlexBox>
                <BuyNowBtn>Buy Now</BuyNowBtn>
              </HeaderLeftBox>
            </HeaderLeftCol>
          </SingleCourseFlex>
        </SingleCourseWrapper>
      </SingleCourseSection>
    </SingleCourseSect>
  );
};

export default SingleCourseHeader;
