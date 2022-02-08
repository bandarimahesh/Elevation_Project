import styled from "styled-components";

export const TraineeSect = styled.section`
  width: 100%;
  height: 100vh;
`;
export const TraineeWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;
`;
export const TraineeFlex = styled.div`
  display: flex;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
`;
export const TraineeRightCol = styled.div`
  flex: 7;
  width: 100%;
  border-left: 1px solid lightgrey;
`;
export const TraineeLeftCol = styled.div`
  flex: 5;
  margin-top: 50px;
`;
export const ImgBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ImgForm = styled.form``;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid green;
`;
export const TraineeTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-right: 20px;
`;
export const TraineeRole = styled.p`
  font-size: 19px;
  font-weight: 400;
  display: inline;
  margin-right: 20px;
`;
export const TraineeUl = styled.ul``;
export const TraineeLi = styled.li`
  list-style-type: none;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
  cursor: pointer;
  width: 70%;
  font-size: 19px;
  transition: all 0.4s ease-in-out;
  /* text-align: center; */
  &:nth-child(1) {
    background-color: lightgrey;
  }
  &:nth-child(6) {
    border-bottom: none !important;
  }
  &:hover {
    background-color: lightgrey;
  }
`;

export const DetailsFlex = styled.div`
  margin-left: 60px;
`;
export const DetailsFlex1 = styled.div`
  display: flex;
  padding: 7px 10px;
`;
export const DetailsTitles = styled.h4`
  font-weight: 600;
  margin-right: 5px;
`;
export const DetailsFromDb = styled.p`
  font-weight: 400;
  margin-left: 5px;
`;
