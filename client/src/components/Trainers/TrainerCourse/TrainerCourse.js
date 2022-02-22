import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TrainerCourseSect,
  TrainerCourseSection,
  TrainerCourseTables,
  TrainerCourseTd,
  TrainerCourseTh,
  TrainerCourseTr,
  TrainerCourseWrapper,
} from "./TrainerCourseElements";

const TrainerCourse = () => {
  const [trainerCourses, setTrainerCourses] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  useEffect(() => {
    const getOnlyTrainerCourses = async () => {
      try {
        const result = await axios.get(`/trainer/profile/courses/get/${path}`);
        setTrainerCourses(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getOnlyTrainerCourses();
  }, [path]);
  console.log(trainerCourses);
  return (
    <TrainerCourseSect>
      <TrainerCourseSection>
        <TrainerCourseWrapper>
          {trainerCourses?.length === 0 && <h1>No courses found </h1>}
          <TrainerCourseTables>
            <TrainerCourseTr>
              <TrainerCourseTh>Id</TrainerCourseTh>
              <TrainerCourseTh>Title</TrainerCourseTh>
              <TrainerCourseTh>Creation Date</TrainerCourseTh>
              <TrainerCourseTh>Starts&End Date</TrainerCourseTh>
              <TrainerCourseTh>Category</TrainerCourseTh>
              <TrainerCourseTh>Trainer Name</TrainerCourseTh>

              <TrainerCourseTh>Tags</TrainerCourseTh>
              <TrainerCourseTh>Spayee link</TrainerCourseTh>
            </TrainerCourseTr>

            {trainerCourses?.map((trainer) => (
              <TrainerCourseTr key={trainer.course_id}>
                <TrainerCourseTd>{trainer.course_id}</TrainerCourseTd>
                <TrainerCourseTd>{trainer.course_title}</TrainerCourseTd>
                <TrainerCourseTd>
                  {new Date(trainer.course_cr_date).toLocaleDateString()}
                </TrainerCourseTd>
                <TrainerCourseTd>
                  {new Date(trainer.course_start_dt).toLocaleDateString()}{" "}
                  <br />
                  {new Date(trainer.course_end_dt).toLocaleDateString()}
                </TrainerCourseTd>
                <TrainerCourseTd>{trainer.course_category}</TrainerCourseTd>
                <TrainerCourseTd>{trainer.course_trainer_name}</TrainerCourseTd>
                <TrainerCourseTd>{trainer.course_tags}</TrainerCourseTd>
              </TrainerCourseTr>
            ))}
          </TrainerCourseTables>
        </TrainerCourseWrapper>
      </TrainerCourseSection>
    </TrainerCourseSect>
  );
};

export default TrainerCourse;
