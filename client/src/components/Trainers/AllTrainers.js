import React from "react";
import GoToTop from "../GoToTop";
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
      <GoToTop />
    </AllTrainersSection>
  );
};

export default AllTrainers;
