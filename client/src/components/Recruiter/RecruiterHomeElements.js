import styled from "styled-components";
export const RecruiterHomeSect = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;
export const RecruiterHomePageDiv = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
export const RecruiterHomePageWrapper = styled.div``;
export const RecruiterHomeImg = styled.img`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

export const RecruiterHomeTitles = styled.h1`
  font-weight: 700;
  font-size: 31px;
  color: black;
`;
export const RecruiterTitleDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 100px;
  width: 500px;
`;
export const RecruiterButton = styled.button`
  outline: none;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  border: none;
  padding: 10px 30px;
  margin-top: 20px;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  &:disabled {
    cursor: not-allowed;
  }
`;
