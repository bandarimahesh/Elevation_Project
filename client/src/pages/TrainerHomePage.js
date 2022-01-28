import React from "react";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Footer from "../components/User/Footer/Footer";
import About from "../components/User/About/About";
import TrainerHome from "../components/Trainers/TrainerHome";

const TrainerHomePage = () => {
  return (
    <>
      <NavbarRes />
      <TrainerHome />
      <About />
      <Footer />
    </>
  );
};

export default TrainerHomePage;
