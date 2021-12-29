import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import SingleTrainer from "../components/Normal/Main/Trainers/SingleTrainer/SingleTrainer";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
const SingleTrainerPage = () => {
  return (
    <>
      <NavBarAndRes />;
      <SingleTrainer />
      <Footer />
    </>
  );
};

export default SingleTrainerPage;
