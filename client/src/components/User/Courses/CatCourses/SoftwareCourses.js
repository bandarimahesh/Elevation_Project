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
  const [catCourses, setCatCourses] = useState([]);

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
  const PF = "http://localhost:5000/images/";
  return (
    <CourseSectionDiv>
      {catCourses?.data?.map((course) => (
        <CourseCardDiv key={course.course_id}>
          <CourseBody>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/courses/${course.course_category}/${course.course_id}`}
            >
              <CourseImgBox>
                <CourseImg
                  src={
                    course.course_image
                      ? PF + course.course_image
                      : "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500s"
                  }
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
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </CourseReviewsP>
              <CoursePrice>Price : ₹ {course.course_price}</CoursePrice>
            </CourseReviewsBox>
            <a
              target={`_blank`}
              style={{ textDecoration: "none", color: "black" }}
              href={`${course.course_spayee_link}`}
            >
              <CourseAddCart>Register Now</CourseAddCart>
            </a>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/trainers/details/${course.course_trainer_id}`}
            >
              <TrainerBox>
                <DurationBoxDiv>
                  <Titles> Experience in Teaching : </Titles>
                  <TitlesDesc>{course.course_trainer_exp} Year's</TitlesDesc>
                </DurationBoxDiv>
              </TrainerBox>
              <TrainerBox>
                <DurationBoxDiv>
                  <Titles>Skills : </Titles>
                  <TitlesDesc>{course.course_trainer_skills}</TitlesDesc>
                </DurationBoxDiv>
              </TrainerBox>
              <TrainerBox>
                <TrainerDetails>
                  <TrainerImg src={PF + course.course_trainer_image} />
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
