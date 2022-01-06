import React, { useState } from "react";
import TrainerNavDropdown from "./TrainerNavDropdown";
import TrainerNavbar from "./TrainerNavBar";

const TrainerNavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TrainerNavbar toggleMenuItems={toggleMenuItems} />
      <TrainerNavDropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
    </>
  );
};

export default TrainerNavBarAndRes;
