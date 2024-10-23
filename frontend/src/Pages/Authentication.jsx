import React, { useContext, useState } from "react";
import "./CSS/Authen.css";
import { ShopContext } from "../Context/ShopContext";
const Authentication = () => {
  const { url, setToken } = useContext(ShopContext);
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const login = async () => {
    console.log("Login Function Exe", formData);
    let resData;
    await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (resData = data));
    if (resData.success) {
      /* localStorage.setItem("auth-token", resData.token);
      window.location.replace("/"); */
      setToken(resData.token);
      localStorage.setItem("auth-token", resData.token);
      window.location.replace("/");
    } else {
      alert(resData.error);
    }
  };
  const signup = async () => {
    console.log("Sign Up Function Exe", formData);
    let resData;
    await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (resData = data));
    if (resData.success) {
      localStorage.setItem("auth-token", resData.token);
      window.location.replace("/");
    } else {
      alert(resData.error);
    }
  };

  return (
    <div className="authen">
      <div className="container">
        <h1>{state}</h1>
        <div className="field">
          {state === "Sign Up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginmess">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              {" "}
              Login
            </span>
          </p>
        ) : (
          <p className="loginmess">
            Create an account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              {" "}
              Click here
            </span>
          </p>
        )}
        <div className="signupagree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
