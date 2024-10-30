import React from "react";
import app_store from "../Assets/images/app_store.png";
import play_store from "../Assets/images/play_store.png";
import "./OtherFlatform.css";
export const OtherFlatform = () => {
  return (
    <div className="other-flatform">
      <p>
        For Better Experience Download <br /> Shopper App
      </p>
      <div className="app-download-flatform">
        <img src={play_store} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  );
};
