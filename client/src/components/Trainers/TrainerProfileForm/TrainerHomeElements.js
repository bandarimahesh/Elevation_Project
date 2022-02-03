import styled from "styled-components";

export const TrainerHomeSection = styled.section`
  width: 100%;
  height: 70vh;
  background: url("https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  opacity: 0.9;
  z-index: -10;
  object-fit: cover;
`;
export const TrainerHomeSect = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
export const TrainerHomeWrapper = styled.div``;
export const TrainerHomeFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TrainerHomeRights = styled.div`
  flex: 8;
`;
export const TrainerHomeLeft = styled.div`
  flex: 4;
`;
export const TrainerHomeTitleDiv = styled.div`
  width: 100%;
  padding: 100px 0 0;
`;
export const TrainerHomeImg = styled.img`
  width: 100%;
`;

export const TrainerHomeH1 = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 37px;
`;

export const JoinButton = styled.button`
  padding: 15px 40px;
  width: 200px;
  text-align: center;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  margin-top: 50px;
`;
