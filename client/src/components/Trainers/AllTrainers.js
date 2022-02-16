import React from "react";
import GoToTop from "../GoToTop";
import TrainerCard from "./TrainerCard/TrainerCard";
import {
  AllTrainersDiv,
  AllTrainersSection,
} from "./TrainerProfileForm/AllTrainerElements";

const AllTrainers = () => {
  return (
    <AllTrainersSection>
      <AllTrainersDiv>
        <TrainerCard />
      </AllTrainersDiv>
      <GoToTop />
    </AllTrainersSection>
  );
};

export default AllTrainers;
