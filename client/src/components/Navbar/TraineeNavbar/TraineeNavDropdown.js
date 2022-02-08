import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  CloseIcon,
  DropDownContainer,
  DropDownLink,
  DropDownMenu,
  DropDownWrapper,
  Icon,
} from "./TraineeNavDroElements";
import { logOut } from "../../../redux/userRedux.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const TraineeNavDropdown = ({ isOpen, toggleMenuItems }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const onLogoutHandler = async () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggleMenuItems}>
      <Icon toggleMenuItems={toggleMenuItems}>
        <CloseIcon>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          <DropDownLink>
            {user?.type ? (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${user?.type}`}
              >
                Home
              </Link>
            ) : (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
                Home
              </Link>
            )}
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/about`}
            >
              About us
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/courses"
            >
              Courses
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/trainers"
            >
              Trainers
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/${user?.type}/profile/update/${user?.id}`}
            >
              Profile
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/job-seeker"
            >
              Jobs
            </Link>
          </DropDownLink>
          <DropDownLink>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/recruiter"
            >
              Recruiter
            </Link>
          </DropDownLink>
          <DropDownLink onClick={onLogoutHandler}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Logout
            </Link>
          </DropDownLink>
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default TraineeNavDropdown;
