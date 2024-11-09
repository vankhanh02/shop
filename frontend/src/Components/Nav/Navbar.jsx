import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/store.png";
import cart_icon from "../Assets/shopping-bag.png";
import search_icon from "../Assets/images/search_icon.png";
import { ShopContext } from "../../Context/ShopContext";

import nav_dropdown from "../Assets/down-arrow.png";

export const Navbar = (e) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-memu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p> SHOPPER</p>
        </div>
      </Link>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men </Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women </Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kid">Kid </Link> {menu === "kid" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link to="/about">About </Link> {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={search_icon} className="search-img" alt="search" />
        </div>
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cart_icon} className= "cart-img" alt="cart" />
          </Link>
          {/* {localStorage.getItem("auth-token") && getTotalCartItem() > 0 && (
            <div className="nav-cart-count">{getTotalCartItem()}</div>
          )} */}
          <div className="nav-cart-count">
            {" "}
            <p>{getTotalCartItem()}</p>
          </div>
        </div>
        {localStorage.getItem("auth-token") ? (
          <>
            <button
              className="navbar-login"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="navbar-login">Login</button>
          </Link>
        )}
      </div>
      {/* <div className="nav-login">
        
      </div> */}
    </div>
  );
};
