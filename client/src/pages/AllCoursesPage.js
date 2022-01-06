import React, { useContext } from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import AllCourse from "../components/User/Courses/AllCourses/AllCourses";
import TraineeNavBarRes from "../components/Trainee/TraineeNavbar/TraineeNavBarRes";
import { Context } from "../context/Context";

const AllCourses = () => {
  const { user } = useContext(Context);
  return (
    <React.Fragment>
      <NavBarAndRes />
      {/* {user?.type === "trainee" && <TraineeNavBarRes />} */}
      {/* {user?.type === "trainer" && <TrainerNavBarRes/>} */}
      <AllCourse />
      <Footer />
    </React.Fragment>
  );
};

export default AllCourses;
