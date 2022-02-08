import styled from "styled-components";
export const TrainersSect = styled.section`
  height: auto !important;
  width: 100%;
  background-image: url("https://image.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 968px) {
    background-repeat: repeat;
  }
`;
export const TrainersSection = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const TrainersWrapper = styled.div``;
// page title
export const TrainersTitle = styled.h1`
  color: blue;
  font-size: 37px;
  font-weight: 700;
  text-align: center;
`;
export const LineAfter = styled.div`
  &::before {
    content: "";
    width: 180px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #9926f0;
  }
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    padding-top: 0.1rem;
    margin: 0 auto;
    display: block;
    background-color: #9926f0;
  }
`;

export const ClickMoreBox = styled.div`
  margin: 80px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClickMore = styled.button`
  text-align: center;
  width: 200px;
  cursor: pointer;
  height: 40px;
  border: 1px solid #111;
  &:hover {
    background-color: lightblue;
  }
`;
