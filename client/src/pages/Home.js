import React from "react";
import { useState } from "react";
import Navbar from "../components/Normal/Navbar/Navbar";
import HomeSection from "../components/Normal/Main/Home/HomeSection";
import Dropdown from "../components/Normal/Navbar/Dropdown";
import Courses from "../components/Normal/Main/Courses/Courses";
import About from "../components/Normal/Main/About/About";
import Trainers from "../components/Normal/Main/Trainers/Trainers";
import Reviews from "../components/Normal/Main/Reviews/Reviews";
import NewsLetter from "../components/Normal/Main/NewsLetter/NewsLetter";
import OurClients from "../components/Normal/Main/OurClients/OurClients";
import Footer from "../components/Normal/Footer/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggleMenuItems={toggleMenuItems} />
      <Dropdown isOpen={isOpen} toggleMenuItems={toggleMenuItems} />
      <HomeSection />
      <About />
      <Courses />

      <Trainers />
      <Reviews />
      <NewsLetter />
      <OurClients />
      <Footer />
    </div>
  );
};

export default Home;
