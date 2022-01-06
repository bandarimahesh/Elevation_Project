import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  NavLink,
  RightbarContainer,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
  RightbarContainerMenu,
  RightbarContainerList,
  SearchBoxInput,
  CartBox,
  FaSearchIcon,
  FaCartIcon,
} from "./TraineeNavbarElements.js";
import logo from "../../../images/logo-rm.png";
import { Context } from "../../../context/Context";

const TraineeNavbar = ({ toggleMenuItems }) => {
  let navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const onLogoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <Nav>
      <LogoContainer>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/${user?.type}`}
        >
          <LogoImage src={logo} alt="brand " />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <NavLink>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${user?.type}`}
              >
                Home
              </Link>
            </NavLink>
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
              Trainers
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <RightbarContainer>
        <RightbarContainerMenu>
          <RightbarContainerList>
            <SearchBoxDiv>
              <SearchForm>
                <SearchBoxInput placeholder="Search....."></SearchBoxInput>
                <FaSearchIcon />
              </SearchForm>
            </SearchBoxDiv>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/my-learning`}
            >
              My Learning
            </Link>
          </RightbarContainerList>
          <RightbarContainerList>Profile</RightbarContainerList>
          <RightbarContainerList>
            <CartBox>
              <Link
                to={`/cart`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaCartIcon />
              </Link>
            </CartBox>
          </RightbarContainerList>
          <RightbarContainerList onClick={onLogoutHandler}>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Logout
            </Link>
          </RightbarContainerList>
        </RightbarContainerMenu>
        <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </RightbarContainer>

      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default TraineeNavbar;
