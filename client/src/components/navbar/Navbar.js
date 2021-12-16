import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={useStyles.navbar}>
      <div className="logo-box">
        <h1 className={useStyles.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Navrik
          </Link>
        </h1>
      </div>
      <div className={useStyles["menu-box"]}>
        <ul className={useStyles.menu__box__item}>
          <li className={useStyles.menu__box__list}>Home</li>
          <li className={useStyles.menu__box__list}>About</li>
          <li className={useStyles.menu__box__list}>Services</li>
          <li className={useStyles.menu__box__list}>Programmes</li>
          <li className={useStyles.menu__box__list}>Contact Us</li>
        </ul>
      </div>
      <div className={useStyles["auth-box"]}>
        <ul>
          <li className={useStyles.auth__item}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </li>
          <li className={useStyles.auth__item}>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
