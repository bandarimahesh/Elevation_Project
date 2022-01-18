import styled from "styled-components";

export const JobHomeSect = styled.section`
  width: 100%;
  height: 100vh;
`;
export const JobHomePageDiv = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
export const JobHomePageWrapper = styled.div``;
export const JobHomeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const JobHomeDiv = styled.div`
  margin: 40px auto;
  width: 100%;
  text-align: center;
`;
export const JobHomeTitles = styled.h1`
  /* text-align: center; */
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
