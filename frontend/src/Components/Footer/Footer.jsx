import React from 'react'
import './Footer.css'
import footer_img from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pinicon from '../Assets/pintester_icon.png'
import whatassp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
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
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer