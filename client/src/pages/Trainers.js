import React from "react";
import Dropdown from "../components/Normal/Navbar/Dropdown";
import Navbar from "../components/Normal/Navbar/Navbar";
import Footer from "../components/Normal/Footer/Footer";
import Trainers from "../components/Normal/Main/Trainers/Trainers";
const Trainer = () => {
  return (
    <>
      <Navbar />
      <Dropdown />
      <Trainers />
      <Footer />
    </>
  );
};

export default Trainer;
