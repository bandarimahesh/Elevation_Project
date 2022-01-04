import React from "react";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import Footer from "../components/User/Footer/Footer";

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
