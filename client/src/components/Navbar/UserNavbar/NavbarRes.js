import React, { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import TraineeNavbar from "../TraineeNavbar/TraineeNavbar";
import TrainerNavbar from "../TrainerNavbar/TrainerNavbar";
import TraineeNavDropdown from "../TraineeNavbar/TraineeNavDropdown";
import TrainerNavDropdown from "../TrainerNavbar/TrainerNavDropdown";
import JobNavbar from "../JobSeeker/JobNavbar";
import JobNavDropdown from "../JobSeeker/JobNavDropdown";
import { useSelector } from "react-redux";
const NavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      {user === null ? (
        <>
          <Navbar toggleMenuItems={toggleMenuItems} />
          <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
        </>
      ) : null}

      {user?.type === "trainee" ? (
        <>
          <TraineeNavbar toggleMenuItems={toggleMenuItems} />
          <TraineeNavDropdown
            isOpen={isOpen}
            toggleMenuItems={toggleMenuItems}
          />
        </>
      ) : null}
      {user?.type === "trainer" && (
        <>
          <TrainerNavbar toggleMenuItems={toggleMenuItems} />
          <TrainerNavDropdown
            isOpen={isOpen}
            toggleMenuItems={toggleMenuItems}
          />
        </>
      )}
      {user?.type === "job-seeker" && (
        <>
          <JobNavbar toggleMenuItems={toggleMenuItems} />
          <JobNavDropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
        </>
      )}
    </>
  );
};

export default NavBarAndRes;
