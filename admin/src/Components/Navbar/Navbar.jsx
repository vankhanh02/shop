import React from "react";
import "./Navbar.css";
import navprofile from "../../assets/nav-profile.svg";
import logo from "../../assets/store.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" className="nav-logo" />
        <p> SHOPPER</p>
      </div>
      <img src={navprofile} alt="" className="nav-pro" />
    </div>
  );
};

export default Navbar;
