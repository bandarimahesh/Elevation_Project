import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SingleTrainerSect,
  SingleTrainerSection,
  SingleTrainerWrapper,
  TrainerDiv,
  TrainerDivIns,
  TrainerDivWrapper,
  TrainerDivTitle,
  TrainerDivAbout,
  TrainerDivFlex,
  TrainerImg,
  TrainerDivWrapper1,
  TrainerCard,
  TrainerHeader,
  TrainerCourseImg,
  TrainerCourseTitle,
  TrainerBody,
  DurationBoxDiv,
  Titles,
  TitlesDesc,
  CourseReviewsBox,
  CourseReviewsP,
  CoursePrice,
  TrainerFooter,
  CourseAddCart,
  TrainerDescription,
  TrainerSocialLinks,
} from "./SingleTrainerElements";
import GoToTop from "../../../GoToTop";
import { useSelector } from "react-redux";

const SingleTrainer = () => {
  const [trainerDetails, setTrainerDetails] = useState([]);
  const [trainerCourses, setTrainerCourses] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[3];
  console.log(path);
  useEffect(() => {
    const getTrainerFullDetails = async () => {
      try {
        const result = await axios.get(`/trainer/profile/get/${path}`);
        setTrainerDetails(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTrainerFullDetails();
  }, [path]);
  console.log(trainerDetails);
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
  const user = useSelector((state) => state.user.currentUser);
  const PF = "http://localhost:5000/images/";
  const defaultImage = "";
  return (
    <SingleTrainerSect>
      <SingleTrainerSection>
        <SingleTrainerWrapper>
          <TrainerDiv>
            <TrainerDivWrapper>
              {trainerDetails.length === 0 && <h1>No trainer details found</h1>}
              {trainerDetails.length > 0 &&
                trainerDetails.map((trainer) => (
                  <SingleTrainerWrapper>
                    <TrainerDivWrapper1>
                      <TrainerDivIns>Instructor</TrainerDivIns>
                      <TrainerDivTitle>
                        {trainer.trainer_firstname +
                          " " +
                          trainer.trainer_lastname}
                      </TrainerDivTitle>
                      <TrainerDivFlex>
                        <TrainerImg
                          src={
                            !trainer.trainer_image
                              ? defaultImage
                              : PF + trainer.trainer_image
                          }
                          alt="trainer image"
                        />
                        <TrainerDivAbout>
                          <TrainerDivIns>About Me : </TrainerDivIns>
                          <TrainerDescription>
                            {trainer.trainer_description}
                          </TrainerDescription>
                          <TrainerDivIns>Connect with Me : </TrainerDivIns>
                          <TrainerSocialLinks
                            target={`_blank`}
                            style={{ textDecoration: "none" }}
                            href={`${trainer.trainer_lnprofile}`}
                          >
                            Linked in <i className="fa-brands fa-linkedin"></i>
                          </TrainerSocialLinks>
                          <TrainerSocialLinks
                            target={`_blank`}
                            style={{ textDecoration: "none" }}
                            href={`${trainer.trainer_lnprofile}`}
                          >
                            Facebook
                            <i class="fa-brands fa-facebook-square"></i>
                          </TrainerSocialLinks>
                        </TrainerDivAbout>
                      </TrainerDivFlex>
                    </TrainerDivWrapper1>
                    <TrainerDivWrapper1>
                      <TrainerDivIns>Certifications :</TrainerDivIns>
                    </TrainerDivWrapper1>
                  </SingleTrainerWrapper>
                ))}
              {/* trainer courses listing */}
              <TrainerDivWrapper1>
                <TrainerDivIns>My Courses :</TrainerDivIns>
                {trainerCourses.length > 0 ? (
                  trainerCourses.map((trainer) => (
                    <TrainerCard key={trainerCourses.course_id}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/courses/${trainer.course_category}/${trainer.course_id}`}
                      >
                        <TrainerHeader>
                          <TrainerCourseImg
                            src={
                              trainer.course_image
                                ? PF + trainer.course_image
                                : `https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
                            }
                            alt="Trainer course Image not available"
                          />
                          <TrainerCourseTitle>
                            {trainer.course_title}
                          </TrainerCourseTitle>
                        </TrainerHeader>
                        <TrainerBody>
                          <DurationBoxDiv>
                            <Titles>Duration:</Titles>
                            <TitlesDesc>
                              {trainer.course_duration} Months
                            </TitlesDesc>
                          </DurationBoxDiv>
                          <DurationBoxDiv>
                            <Titles>Starts Date:</Titles>
                            <TitlesDesc>
                              {new Date(
                                trainer.course_start_dt
                              ).toLocaleDateString()}
                            </TitlesDesc>
                          </DurationBoxDiv>
                          <DurationBoxDiv>
                            <Titles>End Date:</Titles>
                            <TitlesDesc>
                              {new Date(
                                trainer.course_end_dt
                              ).toLocaleDateString()}
                            </TitlesDesc>
                          </DurationBoxDiv>
                          <CourseReviewsBox>
                            <CourseReviewsP>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              {trainer.course_rating}
                            </CourseReviewsP>
                            <CoursePrice>
                              Price : ₹ {trainer.course_price}
                            </CoursePrice>
                          </CourseReviewsBox>
                        </TrainerBody>
                      </Link>
                      <TrainerFooter>
                        {user ? (
                          <a
                            target={`_blank`}
                            style={{ textDecoration: "none", color: "black" }}
                            href={`${trainer.course_spayee_link}`}
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
                      </TrainerFooter>
                    </TrainerCard>
                  ))
                ) : (
                  <h1>No course found</h1>
                )}
              </TrainerDivWrapper1>
            </TrainerDivWrapper>
          </TrainerDiv>
        </SingleTrainerWrapper>
      </SingleTrainerSection>
      <GoToTop />
    </SingleTrainerSect>
  );
};

export default SingleTrainer;
