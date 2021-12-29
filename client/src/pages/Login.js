import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import LoginForm from "../components/Normal/Forms/LoginForm/LoginForm";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";

const Login = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;
