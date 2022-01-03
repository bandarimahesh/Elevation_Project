import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
import SingleTrainer from "../components/Trainers/SingleTrainer/SingleTrainer";
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
