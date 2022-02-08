import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import Home from "./Home";
import {
  HomeSect,
  
} from "./HomeSectElements";

const HomeSection = () => {
  const user = useSelector((state) => state.user.currentUser);

  return <HomeSect>{user?.type ? <Home /> : <LoginForm />}</HomeSect>;
};

export default HomeSection;
