import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <RegisterForm />
      <Footer />
    </React.Fragment>
  );
};

export default Register;
