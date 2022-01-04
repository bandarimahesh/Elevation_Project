import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import Trainee from "../components/Trainee/Trainee";

const TraineeProfilePage = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <Trainee />
      <Footer />
    </React.Fragment>
  );
};

export default TraineeProfilePage;
