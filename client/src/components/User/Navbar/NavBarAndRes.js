import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import { Context } from "../../../context/Context";
import TraineeNavBarRes from "../../Trainee/TraineeNavbar/TraineeNavBarRes";
import TrainerNavBarRes from "../../Trainers/TrainerNavbar/TrainerNavBarRes";
const NavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(Context);
  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!user && (
        <>
          <Navbar toggleMenuItems={toggleMenuItems} />
          <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
        </>
      )}
      {user?.type === "trainee" && <TraineeNavBarRes />}
      {user?.type === "trainer" && <TrainerNavBarRes />}
    </>
  );
};

export default NavBarAndRes;
