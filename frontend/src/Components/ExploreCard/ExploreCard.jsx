import React from "react";
import "./ExploreCard.css";
import { Link } from "react-router-dom";

const ExploreCard = (props) => {
  return (
    <div
      className="item"
      style={{
        background: `url(${props.image}) no-repeat center/cover`,
      }}
    >
      <Link to={`/${props.category}s`}>
        <p className="cardlabel">{props.category} collection</p>
        <button>Explore Now</button>
      </Link>
    </div>
  );
};

export default ExploreCard;
