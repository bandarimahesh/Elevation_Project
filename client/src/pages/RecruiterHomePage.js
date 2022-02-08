import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import RecruiterHome from "../components/Recruiter/RecruiterHome";
const RecruiterHomePage = () => {
  return (
    <div>
      <NavbarRes />
      <RecruiterHome />
      <Footer />
    </div>
  );
};

export default RecruiterHomePage;
