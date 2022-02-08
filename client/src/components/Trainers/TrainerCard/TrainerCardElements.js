import styled from "styled-components";

export const TrainersWrapper1 = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
export const TrainerDiv = styled.div`
  width: 330px;
  cursor: pointer;
  @media only screen and (max-width: 1068px) {
    margin: 20px;
  }
`;
export const TrainerUpDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
`;
export const TrainerDownDiv = styled.div`
  width: 100%;
  background-color: #d1dfe3;
  padding: 20px 30px;
`;
export const TrainerImgDiv = styled.div``;
export const TrainerImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: -80px auto 0 auto;
  object-fit: cover;
  border: 4px solid #fff;
`;
export const TrainerRole = styled.h6`
  font-size: 16px;
  padding: 0px 10px;
  font-weight: 500;
  @media only screen and (max-width: 468px) {
    font-size: 18px;
    padding: 0px 0px;
  }
`;
export const TrainerName = styled.h1`
  font-size: 32px;
  padding: 0px 10px;
  font-weight: 500;
`;
export const TrainerDescription = styled.p`
  font-weight: 300;
  padding: 10px 20px;
`;
export const TrainerKnowMore = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
  transition: all 0.4s ease-in-out;
`;
export const TrainerSocialIcons = styled.div``;
