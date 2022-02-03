import React from "react";
import {
  SingleTrainerSect,
  SingleTrainerSection,
  SingleTrainerTitle,
  SingleTrainerWrapper,
  LineAfter,
} from "./SingleTrainerElements";

const SingleTrainer = () => {
  return (
    <SingleTrainerSect>
      <SingleTrainerSection>
        <SingleTrainerWrapper>
          <SingleTrainerTitle>Single Trainer details</SingleTrainerTitle>
          <LineAfter />
        </SingleTrainerWrapper>
      </SingleTrainerSection>
    </SingleTrainerSect>
  );
};

export default SingleTrainer;
