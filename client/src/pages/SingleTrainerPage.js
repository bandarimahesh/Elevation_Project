import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
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
