import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import SingleTrainer from "../components/Trainers/TrainerCard/SingleTrainer/SingleTrainer";

const SingleTrainerPage = () => {
  return (
    <>
      <NavbarRes />
      <SingleTrainer />
      <Footer />
    </>
  );
};

export default SingleTrainerPage;
