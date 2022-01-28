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
const SoftwareCourses = ({ searchItem }) => {
  console.log(searchItem);
  const [catCourses, setCatCourses] = useState([]);
  const trainerId = 6;
  useEffect(() => {
    const getCourseByCatCourse = async () => {
      try {
        const response = await axios.get(
          searchItem
            ? `/courses/search?name=${searchItem}`
            : `/courses/category/rpa`
        );
        setCatCourses(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCourseByCatCourse();
  }, [searchItem]);

  return (
    <CourseSectionDiv>
      {catCourses?.data?.map((course) => (
        <CourseCardDiv>
          <CourseBody>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/courses/${course.course_category}/${course.course_id}`}
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
              to={`/courses/${course.course_category}/${course.course_id}`}
            >
              <CourseTitleBox>
                <CourseTitleH1>{course.course_title}</CourseTitleH1>
              </CourseTitleBox>
            </Link>
            <DurationBoxDiv>
              <Titles>People Registered:</Titles>
              <TitlesDesc>{course.course_participants}</TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>Duration:</Titles>
              <TitlesDesc> {course.course_duration} Months</TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>Starts Date:</Titles>
              <TitlesDesc>
                {new Date(course.course_start_dt).toLocaleDateString()}
              </TitlesDesc>
            </DurationBoxDiv>
            <DurationBoxDiv>
              <Titles>End Date:</Titles>
              <TitlesDesc>
                {new Date(course.course_end_dt).toLocaleDateString()}
              </TitlesDesc>
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
              <CoursePrice>Price : ₹ {course.course_price}</CoursePrice>
            </CourseReviewsBox>
            <Link
              target={`-blank`}
              style={{ textDecoration: "none", color: "black" }}
              to={`https://learn.elevashun.com/s/store/courses/description/RPA-hands-on-live-training-Program-with-live-projects`}
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

export default SoftwareCourses;
