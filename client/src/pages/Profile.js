import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";

const Profile = () => {
  return (
    <React.Fragment>
      <NavbarRes />
      <SingleProfile />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
