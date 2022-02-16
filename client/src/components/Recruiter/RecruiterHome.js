import React from "react";
import {
  RecruiterButton,
  RecruiterHomeImg,
  RecruiterHomePageDiv,
  RecruiterHomePageWrapper,
  RecruiterHomeSect,
  RecruiterHomeTitles,
  RecruiterTitleDiv,
} from "./RecruiterHomeElements";
import Image from "../../images/main-removebg-preview.png";
import { Link } from "react-router-dom";
const RecruiterHome = () => {
  return (
    <RecruiterHomeSect>
      <RecruiterHomePageDiv>
        <RecruiterHomePageWrapper>
          <RecruiterHomeImg src={Image} />
          <RecruiterTitleDiv>
            <RecruiterHomeTitles>
              Currently we are working on this page,
              <br /> Drop your emails,
              <br /> We will notify once we are live
            </RecruiterHomeTitles>
            <RecruiterButton>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back to Home
              </Link>
            </RecruiterButton>
          </RecruiterTitleDiv>
        </RecruiterHomePageWrapper>
      </RecruiterHomePageDiv>
    </RecruiterHomeSect>
  );
};

export default RecruiterHome;
