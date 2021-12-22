import React from "react";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Main/Carousel/Carousel";
import Marketing from "../components/Main/Marketing/Marketing";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <Marketing />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
