import React from "react";
import Footer from "../../components/User/Footer/Footer";
import NavbarRes from "../../components/Navbar/UserNavbar/NavbarRes";
import AddNewCourse from "../../components/Trainers/TrainerProfileForm/AddNewCourse";
const AddNewCoursePage = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <AddNewCourse />
      <Footer />
    </React.Fragment>
  );
};

export default AddNewCoursePage;
