import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Get Exclusice Offer On Your Email</h2>
      <p>Subcribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
