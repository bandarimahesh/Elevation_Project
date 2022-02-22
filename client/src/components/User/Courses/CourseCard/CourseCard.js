import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
const CourseCard = ({ category, searchItemAll }) => {
  const [courses, setCourses] = useState([]);

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
  }, [category]);
  useEffect(() => {
    const getCourseByCatCourse = async () => {
      try {
        const response = await axios.get(
          searchItemAll
            ? `/courses/search?name=${searchItemAll}`
            : `/courses/all-courses`
        );
        setCourses(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCourseByCatCourse();
  }, [searchItemAll]);

  const user = useSelector((state) => state.user.currentUser);
  const PF = "http://localhost:5000/images/";

  return (
    <>
      {courses?.data?.length === 0 && (
        <CourseSectionDiv>
          <h1>
            No courses found this name, Please Try again with a different name
          </h1>
        </CourseSectionDiv>
      )}
      {!category &&
        courses?.data?.map((course) => (
          <CourseSectionDiv key={course.course_id}>
            <CourseCardDiv>
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
                          : `https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
                      }
                      alt="course picture"
                    />
                  </CourseImgBox>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/courses/${course.course_title}`}
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
                {user ? (
                  <a
                    target={`_blank`}
                    style={{ textDecoration: "none", color: "black" }}
                    href={`${course.course_spayee_link}`}
                  >
                    <CourseAddCart>Register Now</CourseAddCart>
                  </a>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                  >
                    <CourseAddCart>Login to Purchase</CourseAddCart>
                  </Link>
                )}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/trainers/details/${course.course_trainer_profile_id}`}
                >
                  <TrainerBox>
                    <DurationBoxDiv>
                      <Titles> Experience in Teaching : </Titles>
                      <TitlesDesc>
                        {course.course_trainer_exp} Year's
                      </TitlesDesc>
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
                      <TrainerTitleP>
                        {course.course_trainer_name}
                      </TrainerTitleP>
                    </TrainerDetails>
                    <TrainerMore>Know More</TrainerMore>
                  </TrainerBox>
                </Link>
              </CourseBody>
            </CourseCardDiv>
          </CourseSectionDiv>
        ))}
      {category &&
        courses.data
          .filter((course) => course.course_category === category)
          .map((course) => (
            <CourseSectionDiv key={course.course_id}>
              <CourseCardDiv>
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
                            : `https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
                        }
                        alt="course picture"
                      />
                    </CourseImgBox>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/courses/${course.course_title}`}
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
                  {user ? (
                    <a
                      target={`_blank`}
                      style={{ textDecoration: "none", color: "black" }}
                      href={`${course.course_spayee_link}`}
                    >
                      <CourseAddCart>Register Now</CourseAddCart>
                    </a>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/login"
                    >
                      <CourseAddCart>Login to Purchase</CourseAddCart>
                    </Link>
                  )}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/trainers/details/${course.course_trainer_profile_id}`}
                  >
                    <TrainerBox>
                      <DurationBoxDiv>
                        <Titles> Experience in Teaching : </Titles>
                        <TitlesDesc>
                          {course.course_trainer_exp} Year's
                        </TitlesDesc>
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
                        <TrainerTitleP>
                          {course.course_trainer_name}
                        </TrainerTitleP>
                      </TrainerDetails>
                      <TrainerMore>Know More</TrainerMore>
                    </TrainerBox>
                  </Link>
                </CourseBody>
              </CourseCardDiv>
            </CourseSectionDiv>
          ))}
    </>
  );
};

export default CourseCard;
