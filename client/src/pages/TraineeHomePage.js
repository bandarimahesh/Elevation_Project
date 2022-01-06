import React from "react";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
import TraineeNavbar from "../components/Trainee/TraineeNavbar/TraineeNavBar";
import Courses from "../components/User/Courses/Courses";
import Footer from "../components/User/Footer/Footer";

const TraineeHomePage = () => {
  return (
    <>
      <TraineeNavbar />
      <SingleProfile />
      <Courses />
      <Footer />
    </>
  );
};

export default TraineeHomePage;
