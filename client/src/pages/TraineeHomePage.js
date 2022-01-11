import React from "react";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Courses from "../components/User/Courses/Courses";
import Footer from "../components/User/Footer/Footer";
import AboutUs from "../components/User/About/About";

const TraineeHomePage = () => {
  return (
    <>
      <NavbarRes />
      <SingleProfile />
      <Courses />
      <AboutUs />
      <Footer />
    </>
  );
};

export default TraineeHomePage;
