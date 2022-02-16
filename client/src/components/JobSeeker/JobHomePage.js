import React from "react";
import { Link } from "react-router-dom";
import {
  JobHomeSect,
  JobHomePageDiv,
  JobHomePageWrapper,
  JobHomeImg,
  JobTitleDiv,
  JobHomeTitles,
  JobButton,
} from "./JobHomeElements";
import Image from "../../images/main-removebg-preview.png";

const JobHomePage = () => {
  return (
    <JobHomeSect>
      <JobHomePageDiv>
        <JobHomePageWrapper>
          <JobHomeImg src={Image} />
          <JobTitleDiv>
            <JobHomeTitles>
              Currently we are working on this page,
              <br /> Drop your emails,
              <br /> We will notify once we are live
            </JobHomeTitles>
            <JobButton>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back to Home
              </Link>
            </JobButton>
          </JobTitleDiv>
        </JobHomePageWrapper>
      </JobHomePageDiv>
    </JobHomeSect>
  );
};

export default JobHomePage;
