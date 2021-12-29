import React from "react";
import Dropdown from "../components/Normal/Navbar/Dropdown";
import Navbar from "../components/Normal/Navbar/Navbar";
import Footer from "../components/Normal/Footer/Footer";
import SingleTrainer from "../components/Normal/Main/Trainers/SingleTrainer/SingleTrainer";
const SingleTrainerPage = () => {
  return (
    <>
      <Navbar />
      <Dropdown />
      <SingleTrainer />
      <Footer />
    </>
  );
};

export default SingleTrainerPage;
