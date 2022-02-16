import styled from "styled-components";

export const JobHomeSect = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;
export const JobHomePageDiv = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
export const JobHomePageWrapper = styled.div``;
export const JobHomeImg = styled.img`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

export const JobHomeTitles = styled.h1`
  font-weight: 700;
  font-size: 31px;
  color: black;
`;
export const JobTitleDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 100px;
  width: 500px;
`;
export const JobButton = styled.button`
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
  cursor: pointer;
  margin-top: 20px;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  &:disabled {
    cursor: not-allowed;
  }
`;

export const JobHomeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const JobHomeDiv = styled.div`
  margin: 0px auto;
  padding-top: 60px;
  width: 100%;
  text-align: center;
`;

export const JobHomeSearchForm = styled.form``;
export const JobHomeSearchInput = styled.input`
  width: 60%;
  height: 50px;
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  &::placeholder {
    font-size: 16px;
  }
`;
export const JobHomeSearchBtn = styled.button`
  width: 80px;
  height: 50px;
  outline: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
`;
