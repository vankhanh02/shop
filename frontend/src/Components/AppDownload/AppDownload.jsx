import React from "react";
import "./AppDownload.css";
import app_store from "../Assets/images/app_store.png";
import play_store from "../Assets/images/play_store.png";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Shopper App
      </p>
      <div className="apop-download-flatform">
        <img src={play_store} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
