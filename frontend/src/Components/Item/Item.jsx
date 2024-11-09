import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { url } = useContext(ShopContext);
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={`${url}/images/${props.image}`}
          //src={props.image}
          alt="image"
        />
      </Link>
      <p className="cardlabel">{props.name}</p>
      <div className="item-price">
        <div className="price-new">${props.new_price}</div>
        <div className="price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
