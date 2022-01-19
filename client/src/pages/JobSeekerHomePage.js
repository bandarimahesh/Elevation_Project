import React from "react";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Footer from "../components/User/Footer/Footer";
import AboutUs from "../components/User/About/About";
import JobHomePage from "../components/JobSeeker/JobHomePage";
import AllJobs from "../components/JobSeeker/AllJobs";

const JobSeekerHomePage = () => {
  return (
    <>
      <NavbarRes />
      <JobHomePage />
      <AllJobs />
      <AboutUs />
      <Footer />
    </>
  );
};

export default JobSeekerHomePage;
