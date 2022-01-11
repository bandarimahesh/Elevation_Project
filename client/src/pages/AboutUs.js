import React from "react";
import Footer from "../components/User/Footer/Footer";
import About from "../components/User/About/About";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
