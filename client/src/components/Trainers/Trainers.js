import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TrainersSect,
  TrainersSection,
  TrainersTitle,
  TrainersWrapper,
  LineAfter,
} from "./TrainersElements";

const Trainers = () => {
  const navigate = useNavigate();
  const trainer_id = 23;
  const goTospTrainer = (e) => {
    navigate(`/trainers/${trainer_id}`);
  };
  return (
    <TrainersSect>
      <TrainersSection>
        <TrainersWrapper>
          <TrainersTitle>Our Trainers</TrainersTitle>
          <button onClick={goTospTrainer}>GO to profile</button>
          <LineAfter />
        </TrainersWrapper>
      </TrainersSection>
    </TrainersSect>
  );
};

export default Trainers;
