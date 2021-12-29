import styled from "styled-components";
export const CourseSectionDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

export const CourseCardDiv = styled.div`
  width: 400px;
  height: 400px;
  margin: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07);
    border-top: 5px solid red;
  }
`;

// card styles
export const CourseBody = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
`;

export const CourseImgBox = styled.div`
  width: 99%;
  height: 60%;
  margin: 2px auto;
`;
export const CourseImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CourseTitleBox = styled.div``;
export const CourseTitleH1 = styled.h1`
  padding-right: 10px;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
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
`;
export const CoursePrice = styled.h4``;

export const CourseIconLike = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 10;
  color: #fff;
  font-size: 21px;
  cursor: pointer;
`;
export const CourseAddCart = styled.div`
  border: 1px solid blue;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 3px;
  background: lightblue;
  color: #111;
  &:hover {
    background: blue;
    color: white;
  }
`;

export const TrainerBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px 15px;
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
`;
export const TrainerMore = styled.p`
  border: 1px solid #111;
  padding: 5px 10px;
  font-size: 13px;
`;
