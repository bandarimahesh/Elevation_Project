import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <RegisterForm />
      <Footer />
    </React.Fragment>
  );
};

export default Register;
