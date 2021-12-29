import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  NavLink,
  SearchBox,
  SearchBoxContainer,
  SearchItemText,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
} from "./NavbarElements";
import logo from "../../../images/logo-rm.png";
const Navbar = ({ toggleMenuItems }) => {
  const user = true;
  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={logo} alt="" />
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">About Us</NavLink>
          </NavItem>
          <NavItem>Courses</NavItem>
          <NavItem>Contact us</NavItem>
        </MenuItem>
      </MenuContainer>
      <SearchBoxContainer>
        <SearchBoxDiv>
          <SearchBox placeholder="Search"></SearchBox>
          <SearchForm>
            <FaSearch />
          </SearchForm>
        </SearchBoxDiv>
        {user ? (
          <SearchItemText>Profile</SearchItemText>
        ) : (
          <SearchItemText>Register</SearchItemText>
        )}
        <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </SearchBoxContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default Navbar;
