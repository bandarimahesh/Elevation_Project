import React from "react";
import Footer from "../components/Normal/Footer/Footer";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
import RegisterForm from "../components/Normal/Forms/RegisterForm/RegisterForm";

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
