import React, { useContext } from "react";
import "./Detail.css";
import star_icon from "../Assets/star_icon.png";
import star_2_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Detail = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const handlerAddCart = (productId) => {
    if (localStorage.getItem("auth-token")) {
      addToCart(productId);
    } else {
      alert("You must log in to add items to the cart.");
    }
  };

  return (
    <div className="detail">
      <div className="detail-left">
        <div className="detail-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="detail-dis-img">
          <img className="detail-main-image" src={product.image} alt="" />
        </div>
      </div>
      <div className="detail-right">
        <h1>{product.name}</h1>
        <div className="detail-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_2_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="detail-price">
          <div className="detail-price-new">${product.new_price}</div>
          <div className="detail-price-old">${product.old_price}</div>
        </div>
        <div className="detail-des">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem porro
          impedit odio eius molestias, perspiciatis, rem obcaecati voluptatibus
          quod nulla laborum necessitatibus ad odit velit excepturi officiis, a
          alias quam!
        </div>
        <div className="detail-size">
          <h1>Select Size</h1>
          <div className="size-display">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            handlerAddCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="detail-category">
          <span>Category:</span> Women, T-shirt, Croptop
        </p>
        <p className="detail-category">
          <span>Tag:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Detail;
