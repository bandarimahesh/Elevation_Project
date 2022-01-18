import React from "react";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import Footer from "../components/User/Footer/Footer";
import AboutUs from "../components/User/About/About";
import JobHomePage from "../components/JobSeeker/JobHomePage";
import JobCard from "../components/JobSeeker/JobCard";

const JobSeekerHomePage = () => {
  return (
    <>
      <NavbarRes />
      <JobHomePage />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <AboutUs />
      <Footer />
    </>
  );
};

export default JobSeekerHomePage;
