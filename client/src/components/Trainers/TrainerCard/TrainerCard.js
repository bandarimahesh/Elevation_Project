import React from "react";
import { Link } from "react-router-dom";
import {
  TrainerDescription,
  TrainerDiv,
  TrainerDownDiv,
  TrainerImg,
  TrainerImgDiv,
  TrainerKnowMore,
  TrainerName,
  TrainerRole,
  TrainersWrapper1,
  TrainerUpDiv,
} from "./TrainerCardElements";

const TraineeCard = () => {
  return (
    <TrainersWrapper1>
      <TrainerDiv>
        <TrainerUpDiv></TrainerUpDiv>
        <TrainerDownDiv>
          <TrainerImgDiv>
            <TrainerImg
              src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
              alt="trainer picture"
            />
          </TrainerImgDiv>
          <TrainerName>John Smith</TrainerName>
          <TrainerRole>RPA Trainer</TrainerRole>
          <TrainerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed
            molestiae, accusamus quaerat odio consequatur.
          </TrainerDescription>
          <TrainerKnowMore>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/trainers/${6}`}
            >
              Know More
            </Link>
          </TrainerKnowMore>
        </TrainerDownDiv>
      </TrainerDiv>
      <TrainerDiv>
        <TrainerUpDiv></TrainerUpDiv>
        <TrainerDownDiv>
          <TrainerImgDiv>
            <TrainerImg
              src="https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI="
              alt="trainer picture"
            />
          </TrainerImgDiv>
          <TrainerName>Jane Doe</TrainerName>
          <TrainerRole>Domain Trainer</TrainerRole>
          <TrainerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed
            molestiae, accusamus quaerat odio consequatur.
          </TrainerDescription>
          <TrainerKnowMore>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/trainers/${12}`}
            >
              Know More
            </Link>
          </TrainerKnowMore>
        </TrainerDownDiv>
      </TrainerDiv>
      <TrainerDiv>
        <TrainerUpDiv></TrainerUpDiv>
        <TrainerDownDiv>
          <TrainerImgDiv>
            <TrainerImg
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="trainer picture"
            />
          </TrainerImgDiv>
          <TrainerName>Mahesh B</TrainerName>
          <TrainerRole>Mern Stack Dev</TrainerRole>
          <TrainerDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed
            molestiae, accusamus quaerat odio consequatur.
          </TrainerDescription>
          <TrainerKnowMore>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/trainers/${23}`}
            >
              Know More
            </Link>
          </TrainerKnowMore>
        </TrainerDownDiv>
      </TrainerDiv>
    </TrainersWrapper1>
  );
};

export default TraineeCard;
