import React from "react";
import "./Footer.css";
import insta_icon from "../Assets/instagram_icon.png";
import pinicon from "../Assets/pintester_icon.png";
import whatassp from "../Assets/whatsapp_icon.png";
import logo from "../Assets/store.png";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} className="shoplogo" alt="" />
            <h2>SHOPPER</h2>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus minima, pariatur veniam impedit quos assumenda ipsam.
            Nihil odio omnis dicta nisi deserunt tempore amet laboriosam quidem?
            Quas, tempora. Consequuntur, magnam.
          </p>
          <div className="footer-social-icon">
            <img src={insta_icon} alt="" />
            <img src={pinicon} alt="" />
            <img src={whatassp} alt="" />
          </div>
        </div>

        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-333-4444</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright @ 2024 - All Right Reserved</p>
      {/* <div className="footer" id="footer">
      <div className="footer-logo">
        <img src={footer_img} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_icon">
        <div className="footer_icon_container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={pinicon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={whatassp} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        
      </div> 
    </div> */}
    </div>
  );
};

export default Footer;
