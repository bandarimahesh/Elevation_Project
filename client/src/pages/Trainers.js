import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import Trainers from "../components/Normal/Main/Trainers/Trainers";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
const Trainer = () => {
  return (
    <>
      <NavBarAndRes />;
      <Trainers />
      <Footer />
    </>
  );
};

export default Trainer;
