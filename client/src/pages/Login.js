import React from "react";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const Login = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;
