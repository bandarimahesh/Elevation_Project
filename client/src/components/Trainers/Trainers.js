import React from "react";
import { Link } from "react-router-dom";
import {
  TrainersSect,
  TrainersSection,
  TrainersTitle,
  TrainersWrapper,
  LineAfter,
  ClickMoreBox,
  ClickMore,
} from "./TrainersElements";
import TrainerCard from "./TrainerCard/TrainerCard";
import GoToTop from "../GoToTop";
const Trainers = () => {
  return (
    <TrainersSect>
      <TrainersSection>
        <TrainersWrapper>
          <TrainersTitle>Meet Our Trainers</TrainersTitle>
          <LineAfter />
        </TrainersWrapper>
        <TrainerCard />
        <ClickMoreBox>
          <Link to={`/trainers`}>
            <ClickMore>Click To Meet all our Trainers</ClickMore>
          </Link>
        </ClickMoreBox>
      </TrainersSection>
      <GoToTop />
    </TrainersSect>
  );
};

export default Trainers;
