import React from "react";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Courses from "../components/User/Courses/Courses";
import Footer from "../components/User/Footer/Footer";

const TraineeHomePage = () => {
  return (
    <>
      <NavbarRes />
      <SingleProfile />
      <Courses />
      <Footer />
    </>
  );
};

export default TraineeHomePage;
