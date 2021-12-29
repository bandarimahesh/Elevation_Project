import React from "react";
import {
  TrainersSect,
  TrainersSection,
  TrainersTitle,
  TrainersWrapper,
  LineAfter,
} from "./TrainersElements";

const Trainers = () => {
  return (
    <TrainersSect>
      <TrainersSection>
        <TrainersWrapper>
          <TrainersTitle>Our Trainers</TrainersTitle>
          <LineAfter />
        </TrainersWrapper>
      </TrainersSection>
    </TrainersSect>
  );
};

export default Trainers;
