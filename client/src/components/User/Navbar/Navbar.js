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
  SearchBox,
  SearchBoxContainer,
  SearchItemText,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
} from "./NavbarElements";
import logo from "../../../images/logo-rm.png";
import { Context } from "../../../context/Context";

const Navbar = ({ toggleMenuItems }) => {
  let navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const onLogoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
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
            <NavLink>
              {user?.type ? (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${user?.type}`}
                >
                  Home
                </Link>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/`}
                >
                  Home
                </Link>
              )}
            </NavLink>
          </NavItem>
          {!user ? (
            <NavItem>
              <NavLink>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/about`}
                >
                  About us
                </Link>
              </NavLink>
            </NavItem>
          ) : (
            ""
          )}
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
      <SearchBoxContainer>
        <SearchBoxDiv>
          <SearchBox placeholder="Search"></SearchBox>
          <SearchForm>
            <FaSearch />
          </SearchForm>
        </SearchBoxDiv>
        {user ? (
          <>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/${user.type}/profile/update/${user.id}`}
            >
              <SearchItemText>Profile</SearchItemText>
            </Link>

            <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/cart`}
            >
              <SearchItemText>
                <FaShoppingCart />
              </SearchItemText>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              <SearchItemText onClick={onLogoutHandler}>Logout</SearchItemText>
            </Link>
          </>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/register`}
          >
            <SearchItemText>Register</SearchItemText>
          </Link>
        )}
      </SearchBoxContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default Navbar;
