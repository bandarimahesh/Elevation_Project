import styled from "styled-components";
export const CourseSectionDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  display: block;
`;

export const CourseCardDiv = styled.div`
  width: 370px;
  height: auto;
  margin: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border-top: 5px solid red;
  }
  @media only screen and (max-width: 968px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 600px;
  }
  @media only screen and (max-width: 668px) {
    width: 500px;
    margin: 20px;
  }
  @media only screen and (max-width: 568px) {
    width: 450px;
    margin: 10px;
  }
  @media only screen and (max-width: 498px) {
    width: 370px;
    margin: 10px;
  }
  @media only screen and (max-width: 368px) {
    width: 350px;
    margin: 10px;
  }
`;
export const DurationBoxDiv = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
export const Titles = styled.h4`
  font-weight: 500;
  @media only screen and (max-width: 968px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 468px) {
    font-size: 19px;
  }
`;
export const TitlesDesc = styled.p`
  text-transform: capitalize;
  @media only screen and (max-width: 968px) {
    font-size: 21px;
  }
  @media only screen and (max-width: 468px) {
    font-size: 19px;
  }
`;
export const CourseNotFoundHeading = styled.h1`
  padding: 50px;
`;
// card styles
export const CourseBody = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

export const CourseImgBox = styled.div`
  width: 99%;
  height: 200px;
  margin: 2px auto;
  position: relative;
  @media only screen and (max-width: 968px) {
    height: 150px;
  }
`;
export const CourseImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CourseTitleBox = styled.div`
  padding: 5px;
  width: 100%;
`;
export const CourseTitleH1 = styled.h1`
  padding-right: 10px;
  font-size: 24.5px;
  font-weight: 600;
  text-transform: capitalize;
  @media only screen and (max-width: 968px) {
    font-size: 27.5px;
  }
  @media only screen and (max-width: 468px) {
    font-size: 24px;
  }
`;

export const CourseReviewsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
`;
export const CourseReviewsP = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: 500;
  @media only screen and (max-width: 968px) {
    font-size: 27px;
  }
  @media only screen and (max-width: 468px) {
    font-size: 22px;
  }
`;
export const CoursePrice = styled.h4`
  @media only screen and (max-width: 968px) {
    font-size: 27px;
  }
  @media only screen and (max-width: 468px) {
    font-size: 21px;
  }
`;

export const CourseAddCart = styled.div`
  border: 1px solid blue;
  padding: 5px 10px;
  width: 90%;
  margin: 10px auto;
  font-size: 17px;
  border-radius: 3px;
  background: lightblue;
  text-align: center;
  color: #111;
  &:hover {
    background: blue;
    color: white;
  }
  @media only screen and (max-width: 968px) {
    padding: 7px 10px;
  }
`;

export const TrainerBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0px 15px 9px 15px;
`;
export const TrainerImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const TrainerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrainerTitleP = styled.p`
  margin-left: 15px;
  font-size: 13px;
  @media only screen and (max-width: 968px) {
    font-size: 21px;
  }
`;
export const TrainerMore = styled.p`
  border: 1px solid #111;
  padding: 5px 10px;
  font-size: 13px;
`;
