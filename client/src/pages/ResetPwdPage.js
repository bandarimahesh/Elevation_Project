import React from "react";
import ResetPassword from "../components/Forms/PasswordForm/ResetPassword";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
const ResetPwdPage = () => {
  return (
    <>
      <NavbarRes />
      <ResetPassword />
      <Footer />
    </>
  );
};

export default ResetPwdPage;
