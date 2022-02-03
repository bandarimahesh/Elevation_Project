import styled from "styled-components";
export const AboutSect = styled.section`
  height: 100vh;
  width: 100%;
`;
export const AboutSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const AboutWrapper = styled.div``;
// page title
export const AboutTitle = styled.h1`
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
