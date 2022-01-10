import React from "react";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import NavBarAndRes from "../components/Navbar/UserNavbar/NavbarRes";
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
