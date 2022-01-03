import React from "react";
import HomeSection from "../components/Normal/Main/Home/HomeSection";
import Courses from "../components/Normal/Main/Courses/Courses";
import About from "../components/Normal/Main/About/About";
import Reviews from "../components/Normal/Main/Reviews/Reviews";
import NewsLetter from "../components/Normal/Main/NewsLetter/NewsLetter";
import OurClients from "../components/Normal/Main/OurClients/OurClients";
import Footer from "../components/Normal/Footer/Footer";
import NavBarAndRes from "../components/Normal/Navbar/NavBarAndRes";
import Trainers from "../components/Trainers/Trainers";
const Home = () => {
  return (
    <>
      <NavBarAndRes />
      <HomeSection />
      <About />
      <Courses />
      <Trainers />
      <Reviews />
      <NewsLetter />
      <OurClients />
      <Footer />
    </>
  );
};

export default Home;
