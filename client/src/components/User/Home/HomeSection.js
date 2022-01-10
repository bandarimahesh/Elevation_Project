import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../../context/Context";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import Home from "./Home";
import {
  HomeSect,
  HomeSectionComponent,
  HomeWrapper,
} from "./HomeSectElements";

const HomeSection = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <HomeSect>
      <HomeSectionComponent>
        <HomeWrapper>{user ? <Home /> : <LoginForm />}</HomeWrapper>
      </HomeSectionComponent>
    </HomeSect>
  );
};

export default HomeSection;
