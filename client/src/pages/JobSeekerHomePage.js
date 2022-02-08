import React from "react";
import JobHomePage from "../components/JobSeeker/JobHomePage";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Footer from "../components/User/Footer/Footer";

const JobSeekerHomePage = () => {
  return (
    <>
      <NavbarRes />
      <JobHomePage />
      <Footer />
    </>
  );
};

export default JobSeekerHomePage;
