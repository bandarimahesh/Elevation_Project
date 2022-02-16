import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import defaultImage from "../../../images/defaultPic.png";
const TraineeCard = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  useEffect(() => {
    const getAllTrainers = async () => {
      const result = await axios.get("trainer/get/all-trainers");
      setAllTrainers(result.data);
    };
    getAllTrainers();
  }, []);
  const PF = "http://localhost:5000/images/";
  return (
    <TrainersWrapper1>
      {allTrainers?.length > 0
        ? allTrainers?.map((trainer) => (
            <TrainerDiv>
              <TrainerUpDiv></TrainerUpDiv>
              <TrainerDownDiv>
                <TrainerImgDiv>
                  <TrainerImg
                    src={
                      !trainer.trainer_image
                        ? defaultImage
                        : PF + trainer.trainer_image
                    }
                    alt="trainer picture"
                  />
                </TrainerImgDiv>
                <TrainerName>
                  {trainer.trainer_firstname + " " + trainer.trainer_lastname}
                </TrainerName>
                <TrainerRole>RPA Trainer</TrainerRole>
                <TrainerDescription>
                  {trainer.trainer_description}
                </TrainerDescription>
                <TrainerKnowMore>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/trainers/details/${trainer.trainer_id}`}
                  >
                    Know More
                  </Link>
                </TrainerKnowMore>
              </TrainerDownDiv>
            </TrainerDiv>
          ))
        : null}
    </TrainersWrapper1>
  );
};

export default TraineeCard;
