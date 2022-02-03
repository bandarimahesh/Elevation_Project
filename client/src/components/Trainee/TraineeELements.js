import styled from "styled-components";

export const TraineeSect = styled.section`
  width: 100%;
  height: auto;
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
`;
export const TraineeRightCol = styled.div`
  flex: 7;
  width: 100%;
`;
export const TraineeLeftCol = styled.div`
  flex: 5;
  border-right: 1px solid lightgrey;
  margin-right: 10px;
`;
export const ImgBox = styled.div`
  margin-bottom: 20px;
`;
export const ImgForm = styled.form``;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
export const TraineeTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;
export const TraineeRole = styled.p`
  font-size: 19px;
  font-weight: 400;
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

  &:nth-child(6) {
    border-bottom: none !important;
  }
  &:hover {
    background-color: lightgrey;
  }
`;
