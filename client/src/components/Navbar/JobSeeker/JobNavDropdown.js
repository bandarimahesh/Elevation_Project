import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  CloseIcon,
  DropDownContainer,
  DropDownLink,
  DropDownMenu,
  DropDownWrapper,
  Icon,
} from "./JobNavDroElements";

const JobNavDropdown = ({ isOpen, toggleMenuItems }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggleMenuItems}>
      <Icon toggleMenuItems={toggleMenuItems}>
        <CloseIcon>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          trainee Dropdown
          <DropDownLink>Home</DropDownLink>
          <DropDownLink>About</DropDownLink>
          <DropDownLink>Services</DropDownLink>
          <DropDownLink>Course</DropDownLink>
          <DropDownLink>Blog</DropDownLink>
          <DropDownLink>Contact</DropDownLink>
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default JobNavDropdown;
