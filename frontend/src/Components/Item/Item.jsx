import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="image" />
      </Link>
      <p className="item-title">{props.name}</p>
      <div className="item-price">
        <div className="price-new">${props.new_price}</div>
        <div className="price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
