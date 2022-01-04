import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import SingleProfile from "../components/Forms/ProfileForm/SingleProfile";

const Profile = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <SingleProfile />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
