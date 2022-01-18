import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
export const CourseSection = styled.section`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const CourseWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
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

// course selections
export const CourseWrapper1 = styled.div`
  display: flex;
  margin: 0 auto;
  width: 95%;
  padding: 50px 0;
  align-items: center;

  @media only screen and (max-width: 968px) {
    display: block;
  }
`;
export const CourseWrapper2 = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const BorderDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 50%;
  text-align: center;
  margin: 15px auto;
`;
export const CourseCardFlex = styled.div`
  flex: 4;
  display: inline;
  border-right: 1px solid lightgrey;
  margin-right: 20px;
  &:nth-child(3) {
    border-right: none;
    margin-right: 0;
  }
`;
export const CourseCardDivFlex = styled.div``;
export const CourseCardTitle = styled.h1`
  padding-left: 20px;
  word-wrap: break-word;
  font-size: 30px;
  font-weight: 600;
`;
export const LeftColHeading = styled.div`
  flex: 6;
`;
export const RightColOptions = styled.div`
  flex: 6;
`;
export const LeftColHeadingText = styled.h1`
  color: #111;
  font-size: 44px;
  margin-left: 20px;
`;
export const LeftColOptionSelected = styled.select`
  height: 37px;
  width: 150px;
  border-radius: 5px;
  margin: 10px;
  font-size: 15px;
  cursor: pointer;
`;
export const LeftColOption = styled.option`
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
  }
`;
export const SearchForm = styled.form`
  position: relative;
  display: inline-block;
`;
export const SearchBoxInput = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: outline;
`;
export const FaSearchIcon = styled(FaSearch)`
  font-size: 24px;
  color: #111;
  opacity: 0.8;
  top: 12px;
  right: 5px;
  position: absolute;
  cursor: pointer;
`;
export const SelectText = styled.p`
  display: inline-block;
  font-size: 21px;
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
