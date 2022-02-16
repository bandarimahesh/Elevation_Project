import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  SearchBoxContainer,
  SearchItemText,
  SearchForm,
  SearchBoxInput,
  FaSearchIcon,
} from "./NavbarElements";
import logo from "../../../images/logo-rm.png";
import { useSelector } from "react-redux";

const Navbar = ({ toggleMenuItems }) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Nav>
      <LogoContainer>
        {user?.type ? (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${user?.type}`}
          >
            <LogoImage src={logo} alt="brand " />
          </Link>
        ) : (
          <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
            <LogoImage src={logo} alt="brand " />
          </Link>
        )}
      </LogoContainer>

      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/about`}
            >
              About us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/courses"
            >
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/trainers"
            >
              Instructor
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/job-seeker"
            >
              Jobs
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/recruiter`}
            >
              Recruiter
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <SearchBoxContainer>
        <SearchForm>
          <SearchBoxInput placeholder="Search....."></SearchBoxInput>
          <FaSearchIcon />
        </SearchForm>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/register`}
        >
          <SearchItemText>Register</SearchItemText>
        </Link>
      </SearchBoxContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default Navbar;
