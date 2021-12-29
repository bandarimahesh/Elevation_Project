import styled from "styled-components";
export const NewsLetterSect = styled.section`
  height: 50vh;
  background-color: #f1f1f1;
  width: 100%;
`;
export const NewsLetterSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const NewsLetterWrapper = styled.div``;
// page title
export const NewsLetterTitle = styled.h1`
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
