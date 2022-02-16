import React from "react";
import { Link } from "react-router-dom";
import {
  TrainerHomeH1,
  TrainerHomeFlex,
  TrainerHomeLeft,
  TrainerHomeRights,
  TrainerHomeSect,
  TrainerHomeSection,
  TrainerHomeWrapper,
  TrainerHomeTitleDiv,
  JoinButton,
} from "./TrainerHomeElements";

const TrainerHome = () => {
  return (
    <TrainerHomeSection>
      <TrainerHomeSect>
        <TrainerHomeWrapper>
          <TrainerHomeFlex>
            <TrainerHomeRights>
              <TrainerHomeTitleDiv>
                <TrainerHomeH1>Are you interested in Teaching?</TrainerHomeH1>
                <br />
                <TrainerHomeH1>Join Our Team</TrainerHomeH1>
                <Link to={`/trainer/join-now`}>
                  <JoinButton>Join Now</JoinButton>
                </Link>
              </TrainerHomeTitleDiv>
            </TrainerHomeRights>
            <TrainerHomeLeft></TrainerHomeLeft>
          </TrainerHomeFlex>
        </TrainerHomeWrapper>
      </TrainerHomeSect>
    </TrainerHomeSection>
  );
};

export default TrainerHome;
