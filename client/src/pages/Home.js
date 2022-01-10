import React from "react";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import HomeSection from "../components/User/Home/HomeSection";
import About from "../components/User/About/About";
import Courses from "../components/User/Courses/Courses";
import Trainers from "../components/Trainers/Trainers";
import Reviews from "../components/User/Reviews/Reviews";
import NewsLetter from "../components/User/NewsLetter/NewsLetter";
import OurClients from "../components/User/OurClients/OurClients";
import Footer from "../components/User/Footer/Footer";
const Home = () => {
  return (
    <>
      <NavbarRes />
      <HomeSection />
      <Courses />
      <About />
      <Trainers />
      <Reviews />
      <NewsLetter />
      <OurClients />
      <Footer />
    </>
  );
};

export default Home;
