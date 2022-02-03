import React from "react";
import TraineeCard from "./TrainerCard/TrainerCard";
import {
  AllTrainersDiv,
  AllTrainersSection,
} from "./TrainerProfileForm/AllTrainerElements";

const AllTrainers = () => {
  return (
    <AllTrainersSection>
      <AllTrainersDiv>
        <TraineeCard /> <TraineeCard /> <TraineeCard />
      </AllTrainersDiv>
    </AllTrainersSection>
  );
};

export default AllTrainers;
