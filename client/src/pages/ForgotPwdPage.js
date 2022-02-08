import React from "react";
import ForgotPassword from "../components/Forms/PasswordForm/ForgotPassword";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const ForgotPwdPage = () => {
  return (
    <>
      <NavbarRes />
      <ForgotPassword />
      <Footer />
    </>
  );
};

export default ForgotPwdPage;
