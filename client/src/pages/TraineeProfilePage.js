import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Trainee from "../components/Trainee/Trainee";
import AboutUs from "../components/User/About/About";

const TraineeProfilePage = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <Trainee />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
};

export default TraineeProfilePage;
