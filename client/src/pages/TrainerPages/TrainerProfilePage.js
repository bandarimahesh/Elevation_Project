import React from "react";
import Footer from "../../components/User/Footer/Footer";
import NavbarRes from "../../components/Navbar/UserNavbar/NavbarRes";
import TrainerProfileForm from "../../components/Trainers/TrainerProfileForm/TrainerProfileForm";

const TrainerProfileForms = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <TrainerProfileForm />
      <Footer />
    </React.Fragment>
  );
};

export default TrainerProfileForms;
