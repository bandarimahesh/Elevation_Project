import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
export const SingleTrainerSect = styled.section`
  height: auto;
  background-color: #fff;
  width: 100%;
`;
export const SingleTrainerSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 0px 0px;
`;
export const SingleTrainerWrapper = styled.div``;

export const TrainerDivWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px;
`;
export const TrainerDivWrapper1 = styled.div`
  padding-bottom: 30px;
`;
export const TrainerDivIns = styled.p`
  font-size: 24px;
  color: #111;
  padding-bottom: 10px;
  font-weight: 300;
`;

export const TrainerSocialLinks = styled.a`
  padding: 5px;
  background-color: blue;
  color: white;
  margin-right: 10px;
  border-radius: 5px;
`;
export const TrainerDescription = styled.p`
  padding: 10px 0px;
  color: black;
`;
export const TrainerDivTitle = styled.h1`
  font-size: 33px;
  text-transform: capitalize;
`;
export const TrainerDivAbout = styled.p`
  padding: 40px 40px 40px 0;
`;
export const TrainerDiv = styled.div``;
export const TrainerDivFlex = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;
export const LinkedInIcon = styled(AiFillLinkedin)`
  font-size: 25px;
`;
export const TrainerImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TrainerCard = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    transform: scale(1.05);
    border-top: 2px solid red;
  }
`;
export const TrainerHeader = styled.div`
  width: 100%;
  height: 40%;
  position: relative;
`;
export const TrainerCourseImg = styled.img`
  width: 98%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  margin: 3px;
  opacity: 0.6;
`;
export const TrainerCourseTitle = styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  color: blue;
`;

export const TrainerBody = styled.div`
  padding: 13px 0;
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
`;
export const TitlesDesc = styled.p`
  text-transform: capitalize;
`;
export const CourseReviewsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 7px 15px 0 15px;
`;
export const CourseReviewsP = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: 500;
`;
export const CoursePrice = styled.h4``;

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
`;
export const TrainerFooter = styled.div``;
