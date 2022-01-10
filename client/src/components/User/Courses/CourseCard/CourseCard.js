import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CourseCardDiv,
  CourseSectionDiv,
  CourseBody,
  CourseImgBox,
  CourseImg,
  CourseTitleBox,
  CourseTitleH1,
  CourseReviewsBox,
  CourseReviewsP,
  CoursePrice,
  TrainerBox,
  TrainerImg,
  TrainerTitleP,
  TrainerMore,
  TrainerDetails,
  CourseAddCart,
  DurationBoxDiv,
  Titles,
  TitlesDesc,
} from "./CourseCardElements";
const CourseCard = () => {
  const [courses, setCourses] = useState([]);
  const course_title = "course-title";
  const course_id = 1;
  const trainerId = 6;

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await axios.get("/courses/all-courses");
        setCourses(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCourse();
  }, [course_id]);

  return (
    <CourseSectionDiv>
      {courses?.data?.map((course) => (
        <CourseCardDiv>
          <CourseBody>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/courses/${course.course_id}`}
            >
              <CourseImgBox>
                <CourseImg
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="course picture"
                />
              </CourseImgBox>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/courses/${course_title}`}
            >
              <CourseTitleBox>
                <CourseTitleH1>{course.course_name}</CourseTitleH1>
              </CourseTitleBox>
            </Link>
            <DurationBoxDiv>
              <Titles>People Registered:</Titles>
              <TitlesDesc>{course.course_participants}</TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>Duration:</Titles>
              <TitlesDesc> {course.course_duration}</TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>Starts Date:</Titles>
              <TitlesDesc>{course.course_start_dt}</TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>End Date:</Titles>
              <TitlesDesc>{course.course_end_dt}</TitlesDesc>
            </DurationBoxDiv>
            <CourseReviewsBox>
              <CourseReviewsP>
                {course.course_rating}
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </CourseReviewsP>
              <CoursePrice>Price : $499</CoursePrice>
            </CourseReviewsBox>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/courses/${course.course_id}`}
            >
              <CourseAddCart>Register Now</CourseAddCart>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/trainers/${trainerId}`}
            >
              <TrainerBox>
                <TrainerDetails>
                  <TrainerImg src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <TrainerTitleP>{course.course_trainer_name}</TrainerTitleP>
                </TrainerDetails>
                <TrainerMore>Know More</TrainerMore>
              </TrainerBox>
            </Link>
          </CourseBody>
        </CourseCardDiv>
      ))}
    </CourseSectionDiv>
  );
};

export default CourseCard;
