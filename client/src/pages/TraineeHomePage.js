import React from "react";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";

const TraineeHomePage = () => {
  return (
    <>
      <NavBarAndRes />
      <SingleProfile />
      <Footer />
    </>
  );
};

export default TraineeHomePage;
