import React, { useState } from "react";
import TraineeNavDropdown from "./TraineeNavDropdown";
import TraineeNavBar from "./TraineeNavBar";

const TraineeNavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TraineeNavBar toggleMenuItems={toggleMenuItems} />
      <TraineeNavDropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
    </>
  );
};

export default TraineeNavBarAndRes;
