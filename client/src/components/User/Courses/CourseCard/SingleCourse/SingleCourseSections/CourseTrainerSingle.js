import React from "react";
import {
  CourseTrainerBox,
  CourseTrainerConTitle,
  CourseTrainerFlex,
  CourseTrainerSect,
  CourseTrainerSection,
  CourseTrainerWrapper,
  TrainerDescription,
  TrainerDescriptionsBox,
  TrainerDetailsBox,
  TrainerImg,
  TrainerImgBox,
  TrainerTitle,
} from "./CourseTrainerElements";

const CourseTrainerSingle = () => {
  return (
    <CourseTrainerSection>
      <CourseTrainerSect>
        <CourseTrainerWrapper>
          <CourseTrainerConTitle>
            Know more about your trainer
          </CourseTrainerConTitle>
          <CourseTrainerBox>
            <CourseTrainerFlex>
              <TrainerDetailsBox>
                <TrainerTitle>Mahesh</TrainerTitle>
                <TrainerDescriptionsBox>
                  <TrainerDescription>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam similique voluptatem, sit deleniti officia fugiat
                    voluptates sunt voluptas officiis. Modi.
                  </TrainerDescription>
                </TrainerDescriptionsBox>
              </TrainerDetailsBox>
              <TrainerImgBox>
                <TrainerImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </TrainerImgBox>
            </CourseTrainerFlex>
          </CourseTrainerBox>
        </CourseTrainerWrapper>
      </CourseTrainerSect>
    </CourseTrainerSection>
  );
};

export default CourseTrainerSingle;
