import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Trainee from "../components/Trainee/Trainee";

const TraineeProfilePage = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <Trainee />
      <Footer />
    </React.Fragment>
  );
};

export default TraineeProfilePage;
