import styled from "styled-components";
export const AllCoursesSection = styled.section`
  height: auto;
  width: 90%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const AllCoursesWrapper = styled.div``;
// page title
export const MainTitle = styled.h1`
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

// AllCourses selections
export const AllCoursesWrapper1 = styled.div`
  display: block;
  margin: 0 auto;
  width: 95%;
  padding: 50px 0;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 968px) {
    display: block;
  }
`;

export const AllCoursesWrapper2 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const LeftColHeading = styled.div`
  flex: 6;
`;
export const RightColOptions = styled.div`
  flex: 12;
`;
export const SearchBox = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
`;
export const SearchBoxDiv = styled.div`
  position: relative;
`;
export const SearchForm = styled.form`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #111;
`;
export const LeftColHeadingText = styled.h1`
  color: #111;
  font-size: 44px;
  margin-bottom: 40px;
`;
export const LeftColOptionSelected = styled.select`
  height: 30px;
  width: 130px;
  border-radius: 5px;
  margin: 8px;
  font-size: 15px;
  cursor: pointer;
`;
export const LeftColOption = styled.option`
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
  }
`;

export const SelectText = styled.p`
  display: inline-block;
  font-size: 19px;
  font-weight: 500;
  margin-right: 12px;
`;

export const ClickMoreBox = styled.div`
  margin: 0 auto;
  height: 200px;
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
