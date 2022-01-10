import React from "react";
import {
  CloseIcon,
  DropDownContainer,
  DropDownLink,
  DropDownMenu,
  DropDownWrapper,
  Icon,
} from "./DropdownElements";
import { FaTimes } from "react-icons/fa";

const Dropdown = ({ isOpen, toggleMenuItems }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggleMenuItems}>
      <Icon toggleMenuItems={toggleMenuItems}>
        <CloseIcon>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
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

export default Dropdown;
