import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  RightbarContainer,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
  RightbarContainerMenu,
  RightbarContainerList,
  SearchBoxInput,
  FaSearchIcon,
} from "./TrainerNavbarElements.js";
import logo from "../../../images/logo-rm.png";
import { logOut } from "../../../redux/userRedux.js";
import axios from "axios";

const TrainerNavbar = ({ toggleMenuItems }) => {
  const [activeMenuBtn, setActiveMenuBtn] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    const getTrainerProfileDetails = async () => {
      const res = await axios.get(`/trainer/get/trainer/find/${user?.id}`, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      if (res.data.approved) {
        setActiveMenuBtn(true);
      }
    };
    getTrainerProfileDetails();
  }, [user.id, user.accessToken]);

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
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/${user?.type}`}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              About us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/trainer/your-courses/${user?.id}`}
            >
              Your courses
            </Link>
          </NavItem>
          <NavItem>
            {activeMenuBtn && (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/user/admin/dashboard/add-new-course"
              >
                Add New Course
              </Link>
            )}
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
              to={`/trainer/profile/update/${user.id}`}
            >
              Profile
            </Link>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              to={`/cart`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </Link>
          </RightbarContainerList>
          <RightbarContainerList onClick={onLogoutHandler}>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
              Logout
            </Link>
          </RightbarContainerList>
        </RightbarContainerMenu>
      </RightbarContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
      {/* mahesh@12A */}
    </Nav>
  );
};
export default TrainerNavbar;
