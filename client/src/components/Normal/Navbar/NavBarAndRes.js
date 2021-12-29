import React, { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

const NavBarAndRes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleMenuItems={toggleMenuItems} />
      <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
    </>
  );
};

export default NavBarAndRes;
