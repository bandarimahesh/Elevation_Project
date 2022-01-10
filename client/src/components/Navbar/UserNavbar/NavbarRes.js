import React, { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import TraineeNavbar from "../TraineeNavbar/TraineeNavbar";
import TrainerNavbar from "../TrainerNavbar/TrainerNavbar";
import TraineeNavDropdown from "../TraineeNavbar/TraineeNavDropdown";
import TrainerNavDropdown from "../TrainerNavbar/TrainerNavDropdown";
import { useSelector } from "react-redux";
const NavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      {!user && (
        <>
          <Navbar toggleMenuItems={toggleMenuItems} />
          <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
        </>
      )}
      {user?.type === "trainee" && (
        <>
          <TraineeNavbar toggleMenuItems={toggleMenuItems} />
          <TraineeNavDropdown
            isOpen={isOpen}
            toggleMenuItems={toggleMenuItems}
          />
        </>
      )}
      {user?.type === "trainer" && (
        <>
          <TrainerNavbar toggleMenuItems={toggleMenuItems} />
          <TrainerNavDropdown
            isOpen={isOpen}
            toggleMenuItems={toggleMenuItems}
          />
        </>
      )}
    </>
  );
};

export default NavBarAndRes;
