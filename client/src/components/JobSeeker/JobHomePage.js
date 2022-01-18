import React from "react";
import {
  JobHomeSect,
  JobHomePageDiv,
  JobHomePageWrapper,
  JobHomeDiv,
  JobHomeTitles,
  JobHomeSearchForm,
  JobHomeSearchInput,
  JobHomeSearchBtn,
} from "./JobHomeElements";

const JobHomePage = () => {
  const jobSearchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <JobHomeSect>
      <JobHomePageDiv>
        <JobHomePageWrapper>
          <JobHomeDiv>
            <JobHomeTitles>Find the Job that you are looking for</JobHomeTitles>
          </JobHomeDiv>
          <JobHomeDiv>
            <JobHomeSearchForm>
              <JobHomeSearchInput
                type="text"
                placeholder="Search by Roles, key Skills and location"
                onChange={jobSearchHandler}
              />
              <JobHomeSearchBtn>Search</JobHomeSearchBtn>
            </JobHomeSearchForm>
          </JobHomeDiv>
        </JobHomePageWrapper>
      </JobHomePageDiv>
    </JobHomeSect>
  );
};

export default JobHomePage;
